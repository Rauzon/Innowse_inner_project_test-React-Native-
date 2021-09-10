import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import authService from '../../../services/auth/auth.service';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
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
    <View style={styles.container}>
      <Image source={require('../../../assets/img/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
