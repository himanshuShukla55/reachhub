import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Login, SignUp } from "./routes";
import { ToastContainer } from "react-toastify";
import PrivateComponent from "./components/PrivateComponent";
import PlayerInfo from "./routes/PlayerInfo";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateComponent>
              <Home />
            </PrivateComponent>
          }
        />
        <Route
          path="/player-info"
          element={
            <PrivateComponent>
              <PlayerInfo />
            </PrivateComponent>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
