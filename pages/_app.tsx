import type { AppProps } from 'next/app'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA36Hp_iS6wNGlYIu57YI7JLVl5KFjzEBk",
    authDomain: "dariomunoz-latrue.firebaseapp.com",
      projectId: "dariomunoz-latrue",
        storageBucket: "dariomunoz-latrue.appspot.com",
          messagingSenderId: "1037365640303",
            appId: "1:1037365640303:web:10461a3b74c1781415e19a",
              measurementId: "G-GXQPXV93BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters(
    {
        prompt: "select_account"
    }
)

const signIn = () => {
    signInWithPopup(googleProvider, auth);
}

 
 export default function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
   }