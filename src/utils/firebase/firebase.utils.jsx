import { initializeApp } from 'firebase/app';
import {
     getAuth,
     signInWithRedirect,
     signInWithPopup,
     GoogleAuthProvider,

} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGq9ontYY_I1u0l_MHj94OnD9POH71kWM",
    authDomain: "crwn-db-4baa1.firebaseapp.com",
    projectId: "crwn-db-4baa1",
    storageBucket: "crwn-db-4baa1.appspot.com",
    messagingSenderId: "206764473078",
    appId: "1:206764473078:web:9d2c2b5c25257e5b93cad7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGoooglePopUp = () => signInWithPopup(auth, provider);