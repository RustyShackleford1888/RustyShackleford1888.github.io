#!/usr/bin/env python3
"""
Script to add upgrade properties to all Nephalem Valors items.
Adds upgrade text above the amber property for all tiers with appropriate upgrade costs.
"""

import json
import sys

def add_upgrade_properties():
    # Define upgrade costs for each tier
    upgrade_costs = {
        "1": "Upgrade with 1 Radiant Prism",
        "2": "Upgrade with 2 Radiant Prisms", 
        "3": "Upgrade with 4 Radiant Prisms",
        "4": "Upgrade with 8 Radiant Prisms",
        "5": "Upgrade with 16 Radiant Prisms",
        "6": "Upgrade with 2 Greater Radiant Prisms",
        "7": "Upgrade with 3 Greater Radiant Prisms",
        "8": "Upgrade with 5 Greater Radiant Prisms",
        "9": "Upgrade with 10 Greater Radiant Prisms"
    }
    
    # Load the JSON file
    try:
        with open('nv.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("Error: nv.json file not found!")
        return False
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        return False
    
    # Track changes
    items_modified = 0
    
    # Process each item
    for item in data:
        tier = item.get('tier')
        
        # Only process tiers 1-9 (skip tier 10 as no upgrade cost was specified)
        if tier in upgrade_costs:
            # Check if props exist and has at least one property
            if 'props' in item and len(item['props']) > 0:
                # Find the amber property (first property in props array)
                amber_property_index = None
                for i, prop in enumerate(item['props']):
                    if len(prop) >= 2 and prop[0] == 'amber':
                        amber_property_index = i
                        break
                
                # If we found an amber property, insert the upgrade property before it
                if amber_property_index is not None:
                    upgrade_text = upgrade_costs[tier]
                    upgrade_property = ["blue", upgrade_text]
                    
                    # Insert the upgrade property before the amber property
                    item['props'].insert(amber_property_index, upgrade_property)
                    items_modified += 1
                    
                    print(f"Added upgrade property to: {item.get('name', 'Unknown')} (Tier {tier})")
                else:
                    print(f"Warning: No amber property found in {item.get('name', 'Unknown')} (Tier {tier})")
            else:
                print(f"Warning: No props found in {item.get('name', 'Unknown')} (Tier {tier})")
    
    # Save the modified JSON back to file
    try:
        with open('nv.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"\nSuccessfully modified {items_modified} items (Tiers 1-9).")
        print("Changes saved to nv.json")
        return True
    except Exception as e:
        print(f"Error saving file: {e}")
        return False

if __name__ == "__main__":
    print("Adding upgrade properties to all Nephalem Valors tiers...")
    success = add_upgrade_properties()
    if success:
        print("Script completed successfully!")
    else:
        print("Script failed!")
        sys.exit(1)
