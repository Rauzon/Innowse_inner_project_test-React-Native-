import React, {memo} from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import authService from '../../../services/auth/auth.service';
import constants from '../../../constants';
import useIsAuthorized from '../../../hooks/useIsAuthorized';
import s from './main.styles';
import {useNavigation} from '@react-navigation/native';

const {WEB_CLIENT_ID} = constants;

interface IMainProps {}

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

const MainScreen = memo(({}: IMainProps) => {
  const {navigate} = useNavigation();
  const isAuthorized = useIsAuthorized();

  const onGoogleButtonPress = async () => {
    try {
      await authService.signInWithGoogle();
      authService.setUserData();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  if (isAuthorized) {
    navigate('rules');
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require('../../../assets/img/MainScreen_fon.png')} />
      </View>
      <View style={s.title_wrapper}>
        <View>
          <Text style={s.top_title}>Добро пожаловать</Text>
        </View>
        <View>
          <Text style={s.bottom_title}>в my Innowise</Text>
        </View>
        <View style={s.subtitle_wrapper}>
          <Text style={s.subtitle}>
            Будьте в курсе последних событий компании, находите нужные вам
            скидки
          </Text>
        </View>
      </View>
      <View style={s.button_wrapper}>
        <Pressable style={s.button} onPress={onGoogleButtonPress}>
          <Image source={require('../../../assets/img/Group.png')} />
          <Text style={s.button_content}>Continue with Google</Text>
        </Pressable>
      </View>
    </View>
  );
});

export default MainScreen;
