import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
import styles from './splash.styles';
import {useNavigation} from '@react-navigation/native';
import userService from '../../../services/users/user.service';
import {BigLogoIcon} from '../../../Icons';
import {ROUTES} from '../../../constants';

const SplashScreen = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthorized = useIsAuthorized();
  const {navigate} = useNavigation();

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      userService.setUserData();
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (isAuthorized && !isLoading) {
      navigate(ROUTES.APP);
    } else if (!isAuthorized && !isLoading) {
      navigate(ROUTES.LOGIN);
    }
  }, [isAuthorized, isLoading, navigate]);

  return (
    <View style={styles.container}>
      <BigLogoIcon />
    </View>
  );
};

export default SplashScreen;
