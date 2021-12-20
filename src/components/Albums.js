import React, { useEffect, useState } from 'react';
import { Photos } from './Photos';
export const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  useEffect(async () => {
    const albums = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/albums'
    ).then((res) => res.json());
    setAlbums(albums);
    console.log('print albums', albums);
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <div>
        <ul>
          {albums.map((el, index) => (
            <li
              style={{ cursor: 'pointer' }}
              key={index}
              onClick={() => setSelectedAlbum(el)}
            >
              {el.title}
            </li>
          ))}
        </ul>
      </div>

      {selectedAlbum?.id && <Photos albumId={selectedAlbum.id} />}
    </div>
  );
};
