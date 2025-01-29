import json
from api_helper import fetch_data

def save_series():
    series = fetch_data("series")
    with open("data/series.json", "w") as f:
        json.dump(series, f, indent=2)
    print("Series data saved.")

if __name__ == "__main__":
    save_series()
