import {useEffect, useState} from 'react';
import {UserType} from '../services/users/user.types';
import userService from '../services/users/user.service';
//@ts-ignore
import {of} from 'rxjs';

const useSetUserData = (): UserType | null => {
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    const data = userService.getState();
    const observer = of(data.user);
    const subscription = observer.subscribe(setUserData);
    return () => subscription.unsubscribe(observer);
  }, []);

  return userData;
};

export default useSetUserData;
