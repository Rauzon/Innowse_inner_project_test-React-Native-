import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import authService from '../../../services/auth/auth.service';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
import styles from './splash.styles';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthorized = useIsAuthorized();
  const {navigate} = useNavigation();

  useEffect(() => {
    authService.signOut(); // for development
    const timeOut = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeOut);
  }, []);

  if (!isLoading) {
    navigate('login');
  }
  if (!isLoading && isAuthorized) {
    navigate('rules');
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/logo.png')} />
    </View>
  );
};

export default SplashScreen;
