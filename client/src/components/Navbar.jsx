import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/reducers/users/actionCreators";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { auth } = useSelector((store) => store.userState);
  const dispatch = useDispatch();
  let navElements = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
  ];
  navElements = auth
    ? navElements
    : [
        ...navElements,
        {
          id: 2,
          label: "SignUp",
          path: "/signup",
        },
        {
          id: 3,
          label: "Login",
          path: "/login",
        },
      ];
  return (
    <>
      <div className="relative p-6 bg-black text-white">
        <div className="relative z-20 flex justify-between items-center mx-auto text-4xl md:px-5 md:max-w-[1200px]">
          <div className="font-semibold">ChessHub</div>
          {/* navigation menu for medium and large screens */}
          <div className="hidden md:flex gap-10 text-xl">
            {navElements.map(({ id, label, path }) => (
              <Link
                key={id}
                to={path}
                className="hover:bg-white hover:text-black p-3 rounded-lg"
              >
                {label}
              </Link>
            ))}
            {auth && (
              <Link
                to="/login"
                className="hover:bg-white hover:text-black p-3 rounded-lg"
                onClick={() => dispatch(userLogout())}
              >
                Logout
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setShow((prev) => !prev)}>
              {show ? <RxHamburgerMenu /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 z-10 ${
          show ? "h-[100vh] transition-height duration-500 ease-out" : "h-0"
        } overflow-hidden bg-black text-white w-full flex flex-col justify-center items-center text-3xl gap-10 md:hidden`}
      >
        {navElements.map(({ id, label, path }) => (
          <Link
            key={id}
            to={path}
            className="hover:bg-white hover:text-black p-3 w-full text-center"
            onClick={() => setShow(false)}
          >
            {label}
          </Link>
        ))}
        {auth && (
          <Link
            to="/login"
            className="hover:bg-white hover:text-black p-3 w-full text-center"
            onClick={() => {
              setShow(false);
              dispatch(userLogout());
            }}
          >
            Logout
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
