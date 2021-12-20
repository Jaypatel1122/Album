import { FETCH_ALBUMS, FETCH_PHOTOS } from '../constants/counter';

const initState = {
  ablums: [],
  photos: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return Object.assign({}, state, { ablums: action.payload });
    case FETCH_PHOTOS:
      return Object.assign({}, state, { photos: action.payload });
    default:
      return state;
  }
};

export default reducer;
