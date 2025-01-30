import { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholderImage = "/images/marvelD.webp"; // Custom placeholder

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setLoading(false);
    };
    getCharacters();
  }, []);

  return (
    <div className="characters-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="sajs">
            <img src="/images/MarvelB.png" alt="Top Image" className="top-image" />
          </div>
          <div className="characters-grid">
            {characters.map((char) => {
              // Check if the character's image is "image not available"
              const isPlaceholder = char.thumbnail.path.includes("image_not_available");
              const imageUrl = isPlaceholder
                ? placeholderImage
                : `${char.thumbnail.path}.${char.thumbnail.extension}`;

              return (
                <div key={char.id} className="card">
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <img
                          className="character-image"
                          src={imageUrl}
                          alt={char.name}
                        />
                        <strong className="name">{char.name}</strong>
                      </div>
                    </div>
                    <div className="front">
                      <img src="/images/marvelc.webp" alt="" className="img"/>
                      <div className="front-content">
                        <Link to={`/character/${char.id}`} className="badge">View More</Link>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>{char.name}</strong>
                            </p>
                          </div>
                          <strong className="card-footer">
                            Comics available : {char.comics.available || "No comics available"}
                            <br />
                            Series available : {char.series.available || "No series available"}
                            <br />
                            Stories available : {char.stories.available || "No stories available"}
                            <br />
                            Events available : {char.events.available || "No events available"}
                            <br />
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Characters;
