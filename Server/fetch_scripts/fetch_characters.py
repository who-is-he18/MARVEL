import json
from api_helper import fetch_data

def save_characters():
    characters = fetch_data("characters")
    with open("data/characters.json", "w") as f:
        json.dump(characters, f, indent=2)
    print("Characters data saved.")

if __name__ == "__main__":
    save_characters()
