import themeSongApi from '../apis/themeSongApi';
import history from '../history';

export const INIT_GAME = 'INIT_GAME';
export const CREATE_GAME = 'CREATE_GAME';

export const initGame = () => async (dispatch) => {
  const response = await themeSongApi.get('/createGame');
  dispatch({ type: INIT_GAME, payload: response.data });
};

export const createGame = () => async (dispatch) => {
  const response = await themeSongApi.get('/createGame');
  dispatch({ type: CREATE_GAME, payload: response.data });
  // TODO: proper error handling
  const gameId = response.data.gameId;
  history.push(`/${gameId}`);
};
