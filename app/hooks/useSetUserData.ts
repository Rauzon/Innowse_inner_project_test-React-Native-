import {useEffect, useState} from 'react';
import {UserType} from '../services/users/user.types';
import userService from '../services/users/user.service';

const useSetUserData = () => {
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    const user = userService.userState$.value.user;
    if (user) {
      setUserData(user);
    }
  }, []);

  return userData;
};

export default useSetUserData;
