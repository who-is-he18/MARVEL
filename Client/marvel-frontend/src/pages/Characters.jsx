import { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import Loader from "../components/Loader";
import "../styles/characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

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
            {characters.map((char) => (
              <div key={char.id} className="card">
                <div className="content">
                  <div className="back">
                    <div className="back-content">
                      <img
                        className="character-image"
                        src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                        alt={char.name}
                      />
                      <strong>{char.name}</strong>
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>
                    <div className="front-content">
                      <small className="badge">Marvel Character</small>
                      <div className="description">
                        <div className="title">
                          <p className="title">
                            <strong>{char.name}</strong>
                          </p>
                          <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg">
                            <g style={{ mixBlendMode: "normal" }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997">
                              <g transform="scale(8,8)">
                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <p className="card-footer">
                          {char.description || "No description available"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Characters;