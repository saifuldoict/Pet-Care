import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Register
  const registerUser = async (name, email, password, photoURL) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name, photoURL });
    return result.user;
  };

  // 🔹 Login
  const loginUser = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  // 🔹 Google SignIn
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  };

  // 🔹 Logout
  const logOut = async () => await signOut(auth);

  // 🔹 Update Profile
  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) throw new Error("No user is logged in");
    await updateProfile(auth.currentUser, profile);
    setUser({ ...auth.currentUser }); // Update context state
  };

  // 🔹 Forget Password
  const resetPassword = async (email) => {
    if (!email) throw new Error("Please provide an email");
    await sendPasswordResetEmail(auth, email);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        registerUser,
        loginUser,
        loginWithGoogle,
        logOut,
        updateUserProfile,
        resetPassword, // ✅ Added
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
