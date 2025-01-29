import json
from api_helper import fetch_data

def save_creators():
    creators = fetch_data("creators")
    with open("data/creators.json", "w") as f:
        json.dump(creators, f, indent=2)
    print("Creators data saved.")

if __name__ == "__main__":
    save_creators()
