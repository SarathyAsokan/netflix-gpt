import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { APP_LOGO } from "../utils/constants";
import { toggleShowGptScreen } from "../utils/gptSlice";

export const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const userDetails = useSelector((state) => state.auth.userAuth);
  const showGptScreen = useSelector((state) => state.gpt.showGptScreen);
  const dispatch = useDispatch();

  function signOutHandler() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  function gptsearchHandler(){
    dispatch(toggleShowGptScreen());
  }

  return (
    <div className="absolute w-screen h-20 p-4 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-30 h-15 ml-10" src={APP_LOGO} alt="logo" />
      {isSignedIn && (
        <div className="flex">
          <p className="mr-5 pt-2 text-white">
            Welcome {userDetails.displayName}!
          </p>
          <button className="bg-blue-500 mr-4 h-10 px-6 font-semibold rounded-md text-white"
            onClick={gptsearchHandler}
          >
            {showGptScreen ? "Home" : "Search"}
          </button>
          <button
            className="h-10 mr-10 px-6 font-semibold rounded-md bg-red-700 text-white"
            onClick={signOutHandler}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};
