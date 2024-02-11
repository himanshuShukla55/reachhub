import React from "react";
import { useSelector } from "react-redux";
import { FaChessKnight } from "react-icons/fa";
import RatingChart from "../components/RatingChart";
import ClipLoader from "react-spinners/ClipLoader";

const PlayerInfo = () => {
  const { loading, player, rating } = useSelector((store) => store.playerState);
  const {
    username,
    count: { all, win, loss, draw },
    perfs: {
      blitz: { rating: blitzRating },
      bullet: { rating: bulletRating },
      classical: { rating: classicalRating },
      rapid: { rating: rapidRating },
    },
  } = player || {
    username: "",
    count: {
      all: 0,
      win: 0,
      loss: 0,
      draw: 0,
    },
    perfs: {
      blitz: {
        rating: 0,
      },
      bullet: {
        rating: 0,
      },
      rapid: {
        rating: 0,
      },
      classical: {
        rating: 0,
      },
    },
  };
  return loading ? (
    <div className="bg-black w-[100vw] h-[100vh] absolute top-0 flex justify-center items-center">
      <ClipLoader
        color={"white"}
        loading={loading}
        cssOverride={{}}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : player ? (
    <div className="bg-black flex justify-center text-white">
      <div className="w-[80%] max-w-[1500px] p-3 flex flex-col gap-10">
        <div className="flex items-center text-3xl lg:text-4xl">
          <FaChessKnight />
          {username}
        </div>
        <div>
          <h1 className="text-3xl mb-1">Match Statistics</h1>
          <div className="bg-white text-black flex flex-1 rounded-lg w-full p-5 justify-between font-semibold lg:text-xl">
            <h1>Total: {all}</h1>
            <h1>Win: {win}</h1>
            <h1>Loss: {loss}</h1>
            <h1>Draw: {draw}</h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-1">Ratings</h1>
          <div className="bg-white text-black flex flex-1 rounded-lg w-full p-5 justify-between font-semibold lg:text-xl">
            <h1>Classical: {classicalRating || 0}</h1>
            <h1>Rapid: {rapidRating || 0}</h1>
            <h1>Blitz: {blitzRating || 0}</h1>
            <h1>Bullet: {bulletRating || 0}</h1>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg p-3 flex flex-col items-center gap-5 overflow-x-scroll">
          <h1 className="text-3xl">Rating in Last 30 days(Classical)</h1>

          <RatingChart data={rating[3].points} />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PlayerInfo;
