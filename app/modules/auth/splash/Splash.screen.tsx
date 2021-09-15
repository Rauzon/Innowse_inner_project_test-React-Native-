import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import authService from '../../../services/auth/auth.service';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
import s from './splash.styles';

interface ISplashProps {
  navigation: any;
}

const SplashScreen = ({navigation}: ISplashProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthorized = useIsAuthorized();

  useEffect(() => {
    authService.signOut(); // for development
    const timeOut = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeOut);
  }, []);

  if (!isLoading) {
    navigation?.navigate('login');
  }
  if (!isLoading && isAuthorized) {
    navigation?.navigate('rules');
  }
  return (
    <View style={s.container}>
      <Image source={require('../../../assets/img/logo.png')} />
    </View>
  );
};

export default SplashScreen;
