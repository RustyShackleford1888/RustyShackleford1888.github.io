import json

# Load the runewords data
with open('runewords.json', 'r') as file:
    runewords_data = json.load(file)

# Load the augments data
with open('augments.json', 'r') as file:
    augments_data = json.load(file)

# Function to normalize the name for matching
def normalize_name(name):
    return name.lower().replace(" ", "").replace("wordsof", "")

# Add runes from runewords into augments
for augment in augments_data:
    augment_name = normalize_name(augment['name'])
    for runeword in runewords_data:
        runeword_name = normalize_name(runeword['name'])
        if runeword_name == augment_name:
            augment['runes'] = runeword['runes']
            break

# Save the updated augments data to a new JSON file
with open('augments_with_runes.json', 'w') as file:
    json.dump(augments_data, file, indent=4)