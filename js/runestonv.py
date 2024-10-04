import json

# Load the NV and Augments JSON files
with open('nv.json', 'r') as nv_file, open('augments.json', 'r') as aug_file:
    nv_data = json.load(nv_file)
    aug_data = json.load(aug_file)

# Create a dictionary to easily access augment data by name, handling missing runes
aug_dict = {augment['name']: augment.get('runes', []) for augment in aug_data}

# Add runes to each augment in NV items
for item in nv_data:
    if 'Augments' in item:
        for i, augment_name in enumerate(item['Augments']):
            # Find the corresponding augment in aug_dict and add the runes
            if augment_name in aug_dict:
                item['Augments'][i] = {
                    'name': augment_name,
                    'runes': aug_dict[augment_name]
                }

# Save the updated NV JSON file
with open('nv_updated.json', 'w') as nv_updated_file:
    json.dump(nv_data, nv_updated_file, indent=4)

print("Runes added to NV JSON file.")