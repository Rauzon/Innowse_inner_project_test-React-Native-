import {BehaviorSubject} from 'rxjs';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {IAuthState, TransformNameType} from './auth.types';

class AuthService {
  public authState$: BehaviorSubject<IAuthState> =
    new BehaviorSubject<IAuthState>({user: null});
  public constructor() {
    if (AuthService.exists) {
      return AuthService.instance;
    }
    AuthService.instance = this;
    AuthService.exists = true;
  }

  public signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        throw new Error('Sign In was canceled');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw new Error("called services isn't available");
      }
    }
  };

  public setUserData = () => {
    const transformName = (userName: string): TransformNameType => {
      const [name, surname] = userName.split(' ');
      const initials = `${name?.charAt(0)}${surname.charAt(0)}`;
      return {
        name,
        surname,
        initials,
      };
    };
    try {
      const userData = auth().currentUser;
      const {name, initials, surname} = transformName(userData?.displayName!);
      this.authState$.next({
        ...this.authState$,
        user: {
          name,
          surname,
          initials,
          photoUrl: userData?.photoURL,
          email: userData?.email,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  public signOut = async () => {
    await GoogleSignin.revokeAccess();
    auth().signOut();
  };
}

const authService = new AuthService();

export default authService;
