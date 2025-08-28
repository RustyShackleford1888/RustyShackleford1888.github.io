import json
import re

# Load your JSON file
with open("nv.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Regex to capture "Tier x" or "tier x"
tier_pattern = re.compile(r"\s*[Tt]ier\s*(\d+)$")

for entry in data:
    if "name" in entry:
        match = tier_pattern.search(entry["name"])
        if match:
            # Extract tier number
            tier_num = match.group(1)

            # Remove "Tier x" from name
            new_name = tier_pattern.sub("", entry["name"]).strip()
            entry["name"] = new_name

            # Add "tier" field
            entry["tier"] = tier_num

# Save updated JSON
with open("nv_updated.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)
