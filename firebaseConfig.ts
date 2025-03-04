import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDq9g2jv_hg483DgnfGMRScQGc379XvsCQ",
  authDomain: "space-x-84af6.firebaseapp.com",
  projectId: "space-x-84af6",
  storageBucket: "space-x-84af6.appspot.com",
  messagingSenderId: "66179190792",
  appId: "1:66179190792:android:e5fdc006274f7ad31301bd",
};

// Ensure Firebase is initialized only once
const app: FirebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Use `initializeAuth` with `AsyncStorage` for persistent authentication
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
