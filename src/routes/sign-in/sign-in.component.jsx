import {
  signInWithGooglePopup,
  createUserProfileDocument,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserProfileDocument(response);
    console.log("SignInWithPopup.respone: ", response)
  };

  /*
  const logGoogleUser2 = async () => {
    const response = await signIn2();
    createUserProfileDocument(response);
    console.log("SignInWithPopup.respone: ", response)
  };
  */

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;