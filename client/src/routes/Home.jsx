import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PlayerCard from "../components/PlayerCard";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPlayers = async () => {
      try {
        setLoading(true);
        const {
          data: { users },
        } = await axios.get("https://lichess.org/api/player/top/50/classical");
        setPlayers(users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("error in fetching players!");
      }
    };
    getPlayers();
  }, []);
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
  ) : (
    <div className="w-[100vw] h-[100vh] bg-black overflow-y-scroll flex flex-col items-center">
      <h1 className="p-3 mb-3 text-4xl font-semibold text-white">
        CLASSICAL TOP-50
      </h1>
      <div className="w-[80%] max-w-[1500px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Home;
