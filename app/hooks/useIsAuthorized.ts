import {useState} from 'react';
import auth from '@react-native-firebase/auth';

const useIsAuthorized = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  auth().onAuthStateChanged(user => {
    if (user) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  });

  return isAuthorized;
};

export default useIsAuthorized;
