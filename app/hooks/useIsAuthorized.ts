import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const useIsAuthorized = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setIsAuthorized(!!user);
    });
  }, []);

  return isAuthorized;
};

export default useIsAuthorized;
