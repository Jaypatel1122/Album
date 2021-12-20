import React, { useEffect, useState } from 'react';

function Word({ word, isItalic }) {
  return <span>{isItalic ? <i>{word}</i> : word}</span>;
}

function Italicizer({ text, textToFind }) {
  const words = text.split(' ');
  const wordComponents = words.map((word) => (
    <Word word={word} isItalic={textToFind && word.includes(textToFind)} />
  ));

  return (
    <>
      {wordComponents.map((component) => (
        <>{component} </>
      ))}
    </>
  );
}

export default Italicizer;

export const Photos = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(async () => {
    if (!albumId) {
      return;
    }

    console.log('print selectedAlbum ', albumId);
    const photos = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    ).then((res) => res.json());

    console.log('print photos', photos);
    setPhotos(photos);
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      <div>
        <input
          placeholder="search photo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
          {photos
            .filter((photo) => photo.title.startsWith(searchTerm))
            .map((el) => (
              <li style={{ margin: '5px', width: '150px' }}>
                <div>
                  <img src={el.thumbnailUrl} />
                  <div>
                    <Italicizer text={el.title} textToFind={searchTerm} />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
