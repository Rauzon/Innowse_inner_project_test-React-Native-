import {useEffect, useState} from 'react';
import {UserType} from '../services/users/user.types';
import userService from '../services/users/user.service';
//@ts-ignore
import {of} from 'rxjs';

const useSetUserData = (): UserType | null => {
  const [userData, setUserData] = useState<UserType | null>(null);

  //eslint-disable-next-line
  useEffect(() => {
    const data = userService.userState$.getValue();
    const observer = of(data.user);
    const subscription = observer.subscribe(setUserData);
    return () => subscription.unsubscribe();
  });

  return userData;
};

export default useSetUserData;
