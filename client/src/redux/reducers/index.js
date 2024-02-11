import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";
import { playerReducer } from "./player/playerReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  playerState: playerReducer,
});
