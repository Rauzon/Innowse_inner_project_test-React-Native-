import {BehaviorSubject} from 'rxjs';
import auth from '@react-native-firebase/auth';
import {IUserState, TransformNameType} from './user.types';

class UserService {
  public userState$: BehaviorSubject<IUserState> =
    new BehaviorSubject<IUserState>({user: null});
  public constructor() {
    if (UserService.exists) {
      return UserService.instance;
    }
    UserService.instance = this;
    UserService.exists = true;
  }
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
      console.log(err);
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

const userService = new UserService();

export default userService;
