import json
import re

def load_json_file(file_path):
    """Load and parse a JSON file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return None

def load_txt_file(file_path):
    """Load and parse the uniqueitems_valor.txt file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Skip header line
        data = {}
        for line in lines[1:]:  # Skip first line (header)
            line = line.strip()
            if line:
                parts = line.split('\t')
                if len(parts) >= 2:
                    index_name = parts[0].strip()
                    status_codes = parts[1].strip()
                    if status_codes and not status_codes.startswith('cd0') and not status_codes.startswith('cz0'):
                        # Extract status codes (remove any extra spaces and split)
                        codes = [code.strip() for code in status_codes.split() if code.strip().startswith('^')]
                        if codes:
                            data[index_name] = codes
        
        return data
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return None

def create_augment_mapping(augments_data):
    """Create a mapping from status codes to augment data."""
    mapping = {}
    for augment in augments_data:
        if 'index' in augment and augment['index'].startswith('^'):
            status_code = augment['index']
            mapping[status_code] = {
                'name': augment.get('name', ''),
                'runes': augment.get('runes', [])
            }
    return mapping

def add_augments_to_nv(nv_data, status_mapping, augment_mapping):
    """Add Augments field to each entry in nv.json."""
    updated_count = 0
    
    for entry in nv_data:
        if 'index' in entry:
            index_name = entry['index']
            
            # Check if this entry has status codes in the mapping
            if index_name in status_mapping:
                status_codes = status_mapping[index_name]
                augments_list = []
                
                # For each status code, find the corresponding augment
                for status_code in status_codes:
                    if status_code in augment_mapping:
                        augment_data = augment_mapping[status_code]
                        augments_list.append({
                            'name': augment_data['name'],
                            'runes': augment_data['runes']
                        })
                
                # Add the Augments field if we found any augments
                if augments_list:
                    entry['Augments'] = augments_list
                    updated_count += 1
                    print(f"Added augments to {index_name}: {len(augments_list)} augments")
    
    return updated_count

def save_json_file(data, file_path):
    """Save data to a JSON file."""
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"Successfully saved to {file_path}")
    except Exception as e:
        print(f"Error saving {file_path}: {e}")

def main():
    # File paths
    nv_file = "nv.json"
    uniqueitems_file = "uniqueitems_valor.txt"
    augments_file = "augments.json"
    
    print("Loading files...")
    
    # Load the data files
    nv_data = load_json_file(nv_file)
    if not nv_data:
        return
    
    status_mapping = load_txt_file(uniqueitems_file)
    if not status_mapping:
        return
    
    augments_data = load_json_file(augments_file)
    if not augments_data:
        return
    
    print(f"Loaded {len(nv_data)} entries from nv.json")
    print(f"Loaded {len(status_mapping)} status mappings from uniqueitems_valor.txt")
    print(f"Loaded {len(augments_data)} augments from augments.json")
    
    # Create the augment mapping
    augment_mapping = create_augment_mapping(augments_data)
    print(f"Created mapping for {len(augment_mapping)} status codes")
    
    # Add augments to nv.json
    print("\nAdding augments to nv.json...")
    updated_count = add_augments_to_nv(nv_data, status_mapping, augment_mapping)
    
    print(f"\nUpdated {updated_count} entries with augments")
    
    # Save the updated nv.json
    print("\nSaving updated nv.json...")
    save_json_file(nv_data, nv_file)
    
    print("\nDone!")

if __name__ == "__main__":
    main()
