import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAErNyit_f93Wk2VwHOvKa1aKL2YbeJKpE",
  authDomain: "bookify-c520c.firebaseapp.com",
  projectId: "bookify-c520c",
  storageBucket: "bookify-c520c.appspot.com",
  messagingSenderId: "956036970431",
  appId: "1:956036970431:web:34e1527cd6adcb6efb930a",
};



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContaxt = createContext(null);
const googleProvider = new GoogleAuthProvider();
export const useFirebase = () => useContext(FirebaseContaxt);

export const FirebaseProvider = (props) => {
  const [user, setuser] = useState(null);

  useEffect(() => {

    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setuser(user);
      else setuser(null);
    });
  }, []);
//Function Zone
  const createUsersWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  //
  const isLoggedin = user ? true : false;

//Function crreate korar por must valuer moddhe pass kortei hobe ,tokhn seta use
//firebase moddhe paua jabe (const firebase = 'useFirebase', firebase.functionN)
  return (
    <FirebaseContaxt.Provider
      value={{
        createUsersWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedin,
      }}
    >
      {props.children}
    </FirebaseContaxt.Provider>
  );
};
