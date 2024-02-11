import React from "react";
import { FaChessKnight } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getPlayer } from "../redux/reducers/player/actionCreators";
import { useDispatch } from "react-redux";

const PlayerCard = ({ player }) => {
  const dispatch = useDispatch();
  const {
    username,
    perfs: {
      classical: { rating },
    },
  } = player;
  return (
    <div className="bg-white p-5 rounded-lg flex flex-col justify-center items-center gap-5">
      <div className="flex items-center gap-1 text-2xl font-semibold">
        <FaChessKnight />
        <h1>{username}</h1>
      </div>
      <div className="flex gap-10 items-center">
        <h1>Rating: {rating}</h1>
        <Link to="/player-info" onClick={(e) => dispatch(getPlayer(username))}>
          <BsFillInfoCircleFill />
        </Link>
      </div>
    </div>
  );
};

export default PlayerCard;
