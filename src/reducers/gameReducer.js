import { CREATE_GAME, INIT_GAME } from '../actions/games';

const INITIAL_STATE = {
  gameId: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_GAME:
      return { ...state, gameId: action.payload.gameId };
    case CREATE_GAME:
      return { ...state, gameId: action.payload.gameId };
    default:
      return state;
  }
};
