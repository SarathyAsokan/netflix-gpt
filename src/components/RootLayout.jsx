import React, { useEffect } from "react";
import { Header } from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUserAuth, clearUserAuth } from "../utils/authSlice";
import { useDispatch } from "react-redux";

export const RootLayout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUserAuth({uid, email, displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(clearUserAuth());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
