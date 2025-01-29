import json
from api_helper import fetch_data

def save_comics():
    comics = fetch_data("comics")
    with open("data/comics.json", "w") as f:
        json.dump(comics, f, indent=2)
    print("Comics data saved.")

if __name__ == "__main__":
    save_comics()
