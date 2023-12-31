import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showError, setShowError] = useState(null);
  const username = useRef();
  const email = useRef();
  const password = useRef();

  function toggleSigning() {
    setShowSignIn((prev) => !prev);
  }

  function validateUser(e) {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setShowError(message);
    if (message) return;

    if (!showSignIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: username.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setShowError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowError(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute mx-80 my-40 bg-black bg-opacity-75 w-1/4">
        <h1 className="m-2 p-2 text-center font-bold text-white">
          {showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignIn && (
          <div className="m-4 p-2">
            <input
              ref={username}
              type="text"
              placeholder="name"
              className="focus:ring-2 focus:ring-blue-500 bg-gray-700 w-full text-sm text-white placeholder-slate-400 p-2 ring-1 ring-slate-200 shadow-sm"
            />
          </div>
        )}
        <div className="m-4 p-2">
          <input
            ref={email}
            type="email"
            placeholder="email"
            className="focus:ring-2 focus:ring-blue-500 bg-gray-700 w-full text-sm text-white placeholder-slate-400 p-2 ring-1 ring-slate-200 shadow-sm"
          />
        </div>
        <div className="m-4 p-2">
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="focus:ring-2 focus:ring-blue-500 bg-gray-700 w-full text-sm text-white placeholder-slate-400 p-2 ring-1 ring-slate-200 shadow-sm"
          />
        </div>
        {showError != null && (
          <p className="text-red-400 font-bold text-lg p-2 m-4">{showError}</p>
        )}
        <div className="m-4 p-2">
          <button
            onClick={validateUser}
            className="h-10 px-6 w-full font-semibold rounded-md bg-red-700 text-white"
          >
            {showSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p
          className="text-white p-2 m-5 cursor-pointer"
          onClick={toggleSigning}
        >
          {showSignIn ? "New User? SignUp now" : "Already Registered? SignIn"}
        </p>
      </form>
    </>
  );
};
