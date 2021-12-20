import { FETCH_ALBUMS, FETCH_PHOTOS } from './actionType';

export const getAlbums = () => {
  return async (dispatch) => {
    const albums = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/albums'
    ).then((res) => res.json());
    dispatch({
      type: FETCH_ALBUMS,
      payload: albums,
    });
  };
};

export const getPhotos = (albumId) => {
  return async (dispatch) => {
    const photos = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    ).then((res) => res.json());

    console.log('print photos', photos);
    dispatch({
      type: FETCH_PHOTOS,
      payload: photos,
    });
  };
};
