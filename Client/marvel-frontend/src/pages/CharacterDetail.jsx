import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById, getAuthParams } from '../api';
import Loader from '../components/Loader';
import '../styles/characterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };
    getCharacter();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const authParams = getAuthParams();

  return (
    <div className="character-detail-container">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="character-detail-image"
      />
      <h1 className="character-detail-name">{character.name}</h1>
      <p className="character-detail-description">{character.description || 'No description available'}</p>
      <div className="character-detail-info">
        <h2>Comics</h2>
        <ul>
          {character.comics.items.map((comic) => (
            <li key={comic.resourceURI}>
              <a href={`${comic.resourceURI}?${authParams}`} target="_blank" rel="noopener noreferrer">{comic.name}</a>
            </li>
          ))}
        </ul>
        <h2>Series</h2>
        <ul>
          {character.series.items.map((series) => (
            <li key={series.resourceURI}>
              <a href={`${series.resourceURI}?${authParams}`} target="_blank" rel="noopener noreferrer">{series.name}</a>
            </li>
          ))}
        </ul>
        <h2>Stories</h2>
        <ul>
          {character.stories.items.map((story) => (
            <li key={story.resourceURI}>
              <a href={`${story.resourceURI}?${authParams}`} target="_blank" rel="noopener noreferrer">{story.name} ({story.type})</a>
            </li>
          ))}
        </ul>
        <h2>Events</h2>
        <ul>
          {character.events.items.map((event) => (
            <li key={event.resourceURI}>
              <a href={`${event.resourceURI}?${authParams}`} target="_blank" rel="noopener noreferrer">{event.name}</a>
            </li>
          ))}
        </ul>
        <h2>URLs</h2>
        <ul>
          {character.urls.map((url) => (
            <li key={url.url}>
              <a href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;