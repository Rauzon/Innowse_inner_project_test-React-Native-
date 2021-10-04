import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {IAuthState} from './auth.types';
import {ACCESSIBLE_EMAIL, EMAIL_VALID_ERROR} from '../../constants';
//@ts-ignore
import {BehaviorSubject} from 'rxjs';
import errorHandler from '../../helpers/errorHandler';

class AuthService {
  private static instance: AuthService;

  public authState$ = new BehaviorSubject<IAuthState>({
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
  } as IAuthState);

  public static getInstance = (): AuthService => {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  };

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
      } else {
        throw new Error(errorHandler(error));
      }
    }
  };

  private revokeUserAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
    } catch (err) {
      console.log(errorHandler(err));
    }
  };

  public signOut = async () => {
    try {
      await this.revokeUserAccess();
      await auth().signOut();
    } catch (err) {
      throw new Error(errorHandler(err));
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

const authService = AuthService.getInstance();

export default authService;
