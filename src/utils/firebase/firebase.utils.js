import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuRGUlYT1euzhWsE83d1vKLL-27FuXn50",
  authDomain: "crwn-clothing-8238e.firebaseapp.com",
  projectId: "crwn-clothing-8238e",
  storageBucket: "crwn-clothing-8238e.appspot.com",
  messagingSenderId: "260552015058",
  appId: "1:260552015058:web:659ef263d8ca7992c2c10b",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(db, userAuth, user.id);

  const userSnapshot = getDoc(userDocRef);
  console.log(userSnapshot;
};


const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user; // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
/*
export const signIn2 = signInWithRedirect(auth, provider);

export const getRedirectResult = getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    return user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
*/