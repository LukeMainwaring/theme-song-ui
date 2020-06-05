import { CREATE_GAME } from '../actions/games';

const INITIAL_STATE = {
  words: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_GAME:
      console.log(action.payload);
      return { ...state, words: action.payload };
    default:
      return state;
  }
};
