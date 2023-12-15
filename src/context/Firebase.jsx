import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAErNyit_f93Wk2VwHOvKa1aKL2YbeJKpE",
  authDomain: "bookify-c520c.firebaseapp.com",
  projectId: "bookify-c520c",
  storageBucket: "bookify-c520c.appspot.com",
  messagingSenderId: "956036970431",
  appId: "1:956036970431:web:34e1527cd6adcb6efb930a",
};

const firebaseApp = initializeApp(firebaseConfig);
const FirebaseContaxt = createContext(null); 
 export const useFirebase = () => useContext(FirebaseContaxt);

export const FirebaseProvider = (props) => {
  return <FirebaseContaxt.Provider>{props.children}</FirebaseContaxt.Provider>;
};
