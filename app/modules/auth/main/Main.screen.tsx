import React, {useEffect} from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import authService from '../../../services/auth/auth.service';
import {EMAIL_VALID_ERROR, ROUTES, WEB_CLIENT_ID} from '../../../constants';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
import styles from './main.styles';
import {useNavigation} from '@react-navigation/native';
import userService from '../../../services/users/user.service';
import {GoogleIcon, MainScreenIcon} from '../../../Icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigator/navigator.types';
import errorHandler from '../../../helpers/errorHandler';

type LoginScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.LOGIN
>;

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

const MainScreen = () => {
  const {navigate} = useNavigation<LoginScreenProp>();
  const isAuthorized = useIsAuthorized();

  useEffect(() => {
    if (isAuthorized) {
      navigate(ROUTES.RULES as never);
    }
  }, [isAuthorized, navigate]);

  const onGoogleButtonPress = async () => {
    try {
      await authService.signInWithGoogle();
      userService.setUserData();
    } catch (error) {
      if (error.message === EMAIL_VALID_ERROR) {
        navigate(ROUTES.ERROR_SCREEN as never);
      } else {
        Alert.alert(errorHandler(error));
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
