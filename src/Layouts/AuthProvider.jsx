import {createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ! creating new user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! login

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ! google sign in

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ! sign out

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ! update profile receive user name and photo url

  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // provider value passing
  const userInfo = {
    user,
    setUser,
    createUser,
    logout,
    login,
    googleLogIn,
    updateUserProfile,
  };

  // ! for holding user data reload issues

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
