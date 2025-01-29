import json
from api_helper import fetch_data

def save_events():
    events = fetch_data("events")
    with open("data/events.json", "w") as f:
        json.dump(events, f, indent=2)
    print("Events data saved.")

if __name__ == "__main__":
    save_events()
