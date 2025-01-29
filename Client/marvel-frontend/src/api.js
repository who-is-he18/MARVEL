import axios from "axios";
import md5 from "md5";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = "5dbd2e420a1a094045298f55629e7c842a3295c6"; // Store securely!

const getAuthParams = () => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  return `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
};

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}characters?${getAuthParams()}`);
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
