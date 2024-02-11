import {
  GET_PLAYER_FAILED,
  GET_PLAYER_START,
  GET_PLAYER_SUCCESS,
} from "./actions";

const initialState = {
  loading: false,
  player: null,
  rating: null,
  error: null,
};

export const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PLAYER_START:
      return {
        ...state,
        loading: true,
        player: null,
        rating: null,
        error: payload,
      };
    case GET_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: payload.player,
        rating: payload.rating,
        error: null,
      };
    case GET_PLAYER_FAILED:
      return {
        ...state,
        loading: false,
        player: null,
        rating: null,
        error: payload,
      };
    default:
      return state;
  }
};
