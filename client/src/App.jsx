import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://lichess.org/api/player/top/50/classical"
        );
        console.log(res.data);
      } catch (error) {}
    };
    getData();
  }, []);
  return <div>Hello World</div>;
};

export default App;
