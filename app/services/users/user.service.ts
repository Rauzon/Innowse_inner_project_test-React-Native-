import auth from '@react-native-firebase/auth';
import {IUserState, TransformNameType} from './user.types';
//@ts-ignore
import {BehaviorSubject} from 'rxjs';
import errorHandler from '../../helpers/errorHandler';

class UserService {
  private static instance: UserService;
  public userState$: BehaviorSubject<IUserState> =
    new BehaviorSubject<IUserState>({user: null} as IUserState);

  public static getInstance = (): UserService => {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  };

  public setUserData = () => {
    try {
      const userData = auth().currentUser;
      const {name, initials, surname} = this.transformName(
        userData?.displayName!,
      );
      const data = this.userState$.getValue();
      this.userState$.next({
        ...data,
        user: {
          name,
          surname,
          initials,
          photoUrl: userData?.photoURL,
          email: userData?.email,
        },
      });
    } catch (err) {
      console.log(errorHandler(err));
    }
  };
  private transformName = (userName: string): TransformNameType => {
    const [name, surname] = userName.split(' ');
    const initials = `${name?.charAt(0)}${surname.charAt(0)}`;
    return {
      name,
      surname,
      initials,
    };
  };
}

const userService = UserService.getInstance();

export default userService;
