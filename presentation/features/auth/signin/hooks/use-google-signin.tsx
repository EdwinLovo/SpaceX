import { useRouter } from "expo-router";
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useAuthStore } from "@/data/state/use-auth-store";

export const useGoogleSignIn = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const response = await GoogleSignin.signIn();
      const idToken = response.data?.idToken;

      console.log("Google Sign-In Response:", response);

      if (idToken) {
        console.log("Google ID token found");

        // Create a Firebase credential with the Google ID token.
        const googleCredential = GoogleAuthProvider.credential(idToken);
        console.log("Google credential created", googleCredential);

        // Sign in with Firebase
        const userCredential = await signInWithCredential(
          auth,
          googleCredential
        );
        const { user } = userCredential;

        console.log("User signed in:", user);

        if (user) {
          setUser({
            id: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          });
          router.replace("/home");
        } else {
          console.log("Firebase user not found");
        }
      } else {
        console.log("Google ID token not found");
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log("Google Sign-In is already in progress.");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log("Google Play services not available.");
            break;
          default:
            console.log("Google Sign-In error:", error);
        }
      } else {
        console.log("Unexpected error:", error);
      }
    }
  };

  return { googleSignIn };
};
