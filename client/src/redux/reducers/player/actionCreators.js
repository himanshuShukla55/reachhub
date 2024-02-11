import axios from "axios";
import {
  GET_PLAYER_FAILED,
  GET_PLAYER_START,
  GET_PLAYER_SUCCESS,
} from "./actions";

export const getPlayerStart = () => ({
  type: GET_PLAYER_START,
});

export const getPlayerSuccess = (data) => ({
  type: GET_PLAYER_SUCCESS,
  payload: data,
});

export const getPlayerFailed = (error) => ({
  type: GET_PLAYER_FAILED,
  payload: error,
});

export const getPlayer = (username) => async (dispatch) => {
  try {
    dispatch(getPlayerStart());
    const player = await axios.get(`https://lichess.org/api/user/${username}`);
    console.log(1);
    const rating = await axios.get(
      `https://lichess.org/api/user/${username}/rating-history`
    );
    dispatch(getPlayerSuccess({ player: player.data, rating: rating.data }));
  } catch (error) {
    console.log(error);
    dispatch(getPlayerFailed(error));
  }
};
