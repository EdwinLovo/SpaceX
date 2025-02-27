import { useRouter } from "expo-router";
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
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
      console.log("Response", response);

      if (isSuccessResponse(response) && response?.data) {
        const { user } = response.data;
        setUser({
          id: user.id,
          displayName: user.name,
          email: user.email,
          photoURL: user.photo,
        })
        router.push("/home");
      } else {
        // sign in was cancelled by user
        console.log("Error", response);
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return { googleSignIn };
};
