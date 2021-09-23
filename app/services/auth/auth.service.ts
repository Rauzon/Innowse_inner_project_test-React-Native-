import {BehaviorSubject} from 'rxjs';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {IAuthState} from './auth.types';
import {ACCESSIBLE_EMAIL, EMAIL_VALID_ERROR} from '../../constants';

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
      const {idToken, user} = await GoogleSignin.signIn();
      await this.checkEmailValid(user);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        throw new Error(error.message);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw new Error(error.message);
      } else if (error.message === EMAIL_VALID_ERROR) {
        throw new Error(error.message);
      }
    }
  };
  private revokeUserAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
    } catch (e) {
      console.log(e);
    }
  };
  public signOut = async () => {
    try {
      await this.revokeUserAccess();
      await auth().signOut();
    } catch (e) {
      throw new Error(e.message);
    }
  };
  private checkEmailValid = async (userData: {
    [key: string]: string | null;
  }): Promise<string | undefined> => {
    const mailCharsArr = userData?.email?.split('@');
    const emailDomain = mailCharsArr?.pop();
    if (ACCESSIBLE_EMAIL.includes(emailDomain!)) {
      return emailDomain;
    } else {
      await GoogleSignin.revokeAccess();
      throw new Error(EMAIL_VALID_ERROR);
    }
  };
}

const authService = new AuthService();

export default authService;
