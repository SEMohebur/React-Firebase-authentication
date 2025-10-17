import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //creat user auth
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIng user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //sign out method
  const signOutUser = () => {
    setLoading(true);
    signOut(auth);
  };

  //get current user info
  useEffect(() => {
    // mount
    // set thae observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current user in state Change ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    //unmount
    //cleare the observe
    return () => {
      unsubscribe();
    };
  }, []);

  //global storage
  const authInfo = {
    user,
    loading,
    creatUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
