import requests
import hashlib
import time
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

MARVEL_PUBLIC_KEY = os.getenv("MARVEL_PUBLIC_KEY")
MARVEL_PRIVATE_KEY = os.getenv("MARVEL_PRIVATE_KEY")
BASE_URL = "https://gateway.marvel.com/v1/public/"

def get_auth_params():
    """Generate the authentication parameters required by the Marvel API."""
    ts = str(int(time.time()))
    hash_str = hashlib.md5(f"{ts}{MARVEL_PRIVATE_KEY}{MARVEL_PUBLIC_KEY}".encode()).hexdigest()
    return {"ts": ts, "apikey": MARVEL_PUBLIC_KEY, "hash": hash_str}

def fetch_data(endpoint):
    """Fetch data from a specific Marvel API endpoint."""
    params = get_auth_params()
    url = f"{BASE_URL}{endpoint}"
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json().get("data", {}).get("results", [])
    except requests.RequestException as e:
        print(f"Error fetching {endpoint}: {e}")
        return []
