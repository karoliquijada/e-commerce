import { signInWithGoooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGoooglePopUp();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
          Sign In with Google Popup
          </button>
    </div>
  );
};

export default SignIn;