import { CREATE_GAME } from '../actions/games';

const INITIAL_STATE = {
  words: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return { ...state, words: action.payload.words };
    default:
      return state;
  }
};
