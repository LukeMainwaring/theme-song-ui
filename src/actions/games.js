import themeSongApi from '../apis/themeSongApi';
import history from '../history';

export const CREATE_GAME = 'CREATE_GAME';

export const createGame = () => async (dispatch) => {
  const response = await themeSongApi.post('/createGame');
  dispatch({ type: CREATE_GAME, payload: response.data });
  history.push('/');
};
