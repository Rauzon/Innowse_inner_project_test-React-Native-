import React, {useEffect} from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import authService from '../../../services/auth/auth.service';
import {EMAIL_VALID_ERROR, WEB_CLIENT_ID} from '../../../constants';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
import styles from './main.styles';
import {useNavigation} from '@react-navigation/native';
import userService from '../../../services/users/user.service';
import {GoogleIcon, MainScreenIcon} from '../../../Icons';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

const MainScreen = () => {
  const {navigate} = useNavigation();
  const isAuthorized = useIsAuthorized();

  useEffect(() => {
    if (isAuthorized) {
      navigate('rules');
    }
  }, [isAuthorized]);

  const onGoogleButtonPress = async () => {
    try {
      await authService.signInWithGoogle();
      userService.setUserData();
    } catch (error) {
      if (error.message === EMAIL_VALID_ERROR) {
        navigate('errorScreen');
      } else {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainScreenIcon />
      </View>
      <View style={styles.title_wrapper}>
        <View>
          <Text style={styles.top_title}>Добро пожаловать</Text>
        </View>
        <View>
          <Text style={styles.bottom_title}>в my Innowise</Text>
        </View>
        <View style={styles.subtitle_wrapper}>
          <Text style={styles.subtitle}>
            Будьте в курсе последних событий компании, находите нужные вам
            скидки
          </Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={onGoogleButtonPress}>
        <GoogleIcon />
        <Text style={styles.button_content}>Continue with Google</Text>
      </Pressable>
    </View>
  );
};

export default MainScreen;
