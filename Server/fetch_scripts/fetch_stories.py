import json
from api_helper import fetch_data

def save_stories():
    stories = fetch_data("stories")
    with open("data/stories.json", "w") as f:
        json.dump(stories, f, indent=2)
    print("Stories data saved.")

if __name__ == "__main__":
    save_stories()
