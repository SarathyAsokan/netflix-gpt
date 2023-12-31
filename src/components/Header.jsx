import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const userDetails = useSelector((state) => state.auth.userAuth);
  console.log("userDetails", userDetails);

  function signOutHandler() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="absolute w-screen h-20 p-4 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-30 h-15 ml-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {isSignedIn && (
        <div className="flex">
        <p className="mr-5 pt-2 text-white">Welcome {userDetails.displayName}!</p>
        <button
          className="h-10 mr-20 px-6 font-semibold rounded-md bg-red-700 text-white"
          onClick={signOutHandler}
        >
          SignOut
        </button>
        </div>
      )}
    </div>
  );
};
