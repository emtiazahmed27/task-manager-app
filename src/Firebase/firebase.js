import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//register function to create user function in register page

export const registerWithEmailandPassword = (name, email, pass, photoURL) => {
  console.log(name, email, pass, photoURL);
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

//Login function for login page

export const loginWithEmailandPassword = (email, password, setError) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
    })
    .catch((err) => {
      const errorMessage = err.message;
      setError(errorMessage);
    });
};

//social login function

export const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res.user;
};

//logout function

export const logOut = () => {
  signOut(auth);
};
