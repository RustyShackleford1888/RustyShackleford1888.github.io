package main

import (
	"encoding/hex"
	"encoding/json"
	"flag"
	"fmt"
	"hash/crc32"
	"io"
	"io/ioutil"
	"log"
	"os"
	"strings"
	"time"
)

const (
	manifest    = "manifest.json"
	permissions = 0755
)

var ignored = map[string]struct{}{
	"manifest.json": {},
	".DS_Store":     {},
}

func main() {
	dir := flag.String("dir", "", "the directory to run the builder for")
	ignoreCRC := flag.String("ic", "", "files that should be flagged to ignore their crc hash")
	deprecated := flag.String("d", "", "files that have been deprecated and will be flagged as such")

	flag.Parse()

	ignoreContent := make(map[string]bool, 0)
	if ignoreCRC != nil {
		for _, v := range strings.Split(*ignoreCRC, ",") {
			ignoreContent[v] = true
		}
	}

	deprecatedFiles := make(map[string]bool, 0)
	if deprecated != nil {
		for _, v := range strings.Split(*deprecated, ",") {
			deprecatedFiles[v] = true
		}
	}

	if dir != nil && *dir == "" {
		panic("Missing directory to run the builder")
	}

	// Read all the files in the directory.
	files, err := ioutil.ReadDir(*dir)
	if err != nil {
		log.Fatal(err)
	}

	manifest := Manifest{
		Files: make([]PatchFile, 0),
	}

	// Go through the files and skip the files that should be ignored.
	for _, f := range files {
		fileName := f.Name()
		if _, shouldIgnore := ignored[fileName]; shouldIgnore {
			continue
		}

		hash, contentLength, err := hashCRC32(fmt.Sprintf("%s/%s", *dir, fileName), 0xedb88320)
		if err != nil {
			log.Fatal(err)
		}

		manifest.Files = append(manifest.Files, PatchFile{
			Name:          fileName,
			CRC:           hash,
			LastModified:  f.ModTime(),
			ContentLength: contentLength,
			IgnoreCRC:     shouldIgnoreCRC(fileName, ignoreContent),
			Deprecated:    isDeprecated(fileName, deprecatedFiles),
		})
	}

	output, err := json.MarshalIndent(manifest, "", "\t")
	if err != nil {
		log.Fatal(err)
	}

	// Write to the file, replacing the existing manifest with the new updated one.
	err = ioutil.WriteFile(
		fmt.Sprintf("%s/%s", *dir, "manifest.json"),
		output,
		permissions,
	)
	if err != nil {
		log.Fatal(err)
	}
}

//  hashCRC32 will load the file on the given file path, hash it and return sum as a string.
func hashCRC32(filePath string, polynomial uint32) (string, int64, error) {
	// Open file that should be hashed.
	file, err := os.Open(filePath)
	if err != nil {
		return "", 0, err
	}
	// Close file when we're done.
	defer file.Close()

	// Create a table with the given polynomial to hash with.
	table := crc32.MakeTable(polynomial)

	// Create a new hasher.
	hash := crc32.New(table)

	// Copy the contents of the file into the hasher.
	written, err := io.Copy(hash, file)
	if err != nil {
		return "", 0, err
	}

	// Get the sum of the hash.
	hashInBytes := hash.Sum(nil)[:]

	// Encode the hash to a string.
	return hex.EncodeToString(hashInBytes), written, nil
}

func shouldIgnoreCRC(filename string, ignored map[string]bool) bool {
	if _, ok := ignored[filename]; ok {
		return true
	}
	return false
}

func isDeprecated(filename string, deprecated map[string]bool) bool {
	if _, ok := deprecated[filename]; ok {
		return true
	}
	return false
}

// PatchFile represents a file that should be patched.
type PatchFile struct {
	Name          string    `json:"name"`
	CRC           string    `json:"crc"`
	LastModified  time.Time `json:"last_modified"`
	ContentLength int64     `json:"content_length"`
	IgnoreCRC     bool      `json:"ignore_crc"`
	Deprecated    bool      `json:"deprecated"`
}

// Manifest represents the current patch.
type Manifest struct {
	Files []PatchFile `json:"files"`
}
