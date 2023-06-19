import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
  prompt: "select_account",
});

const db = getFirestore();

const auth = getAuth();
export const signInWithGooglePopup = () =>
signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  //const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  return user; // ...
})
.catch((error) => {
  // Handle Errors here.
  console.log("Error creating user: ", error.message);
  
  // ...
});

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  const createdAt = new Date();

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userDocRef;
};
