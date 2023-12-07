import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA36Hp_iS6wNGlYIu57YI7JLVl5KFjzEBk",
authDomain: "dariomunoz-latrue.firebaseapp.com",
projectId: "dariomunoz-latrue",
storageBucket: "dariomunoz-latrue.appspot.com",
messagingSenderId: "1037365640303",
appId: "1:1037365640303:web:10461a3b74c1781415e19a",
measurementId: "G-GXQPXV93BV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider }