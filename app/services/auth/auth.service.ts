import {BehaviorSubject} from 'rxjs';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {IAuthState} from './auth.types';

class AuthService {
  public authState$: BehaviorSubject<IAuthState> =
    new BehaviorSubject<IAuthState>({
      rules: {
        rulesData: [
          {
            id: '1',
            title: 'Правило №1',
            content:
              'Будьте в курсе последних событий компании, находите нужные вам скидки. Будьте в курсе последних событий компании, находите нужные   вам скидки',
            icon: 'firstIcon',
          },
          {
            id: '2',
            title: 'Правило №2',
            content:
              'Будьте в курсе последних событий компании, находите нужные вам скидки. Будьте в курсе последних событий компании, находите нужные   вам скидки',
            icon: 'secondIcon',
          },
          {
            id: '3',
            title: 'Правило №3',
            content:
              'Будьте в курсе последних событий компании, находите нужные вам скидки. Будьте в курсе последних событий компании, находите нужные   вам скидки',
            icon: 'firstIcon',
          },
          {
            id: '4',
            title: 'Правило №4',
            content:
              'Будьте в курсе последних событий компании, находите нужные вам скидки. Будьте в курсе последних событий компании, находите нужные   вам скидки',
            icon: 'secondIcon',
          },
        ],
      },
    });
  public constructor() {
    if (AuthService.exists) {
      return AuthService.instance;
    }
    AuthService.instance = this;
    AuthService.exists = true;
  }
  public getRules = () => {
    return this.authState$.value.rules;
  };
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

  public signOut = async () => {
    await GoogleSignin.revokeAccess();
    auth().signOut();
  };
}

const authService = new AuthService();

export default authService;
