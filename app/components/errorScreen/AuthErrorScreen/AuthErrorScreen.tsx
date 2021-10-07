import React from 'react';
import ErrorScreenWrapper from '../ErrorScreenWrapper/ErrorScreenWrapper';
import {Text} from 'react-native';
import styles from './authErrorScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants';
import ConfirmButton from '../../ConfirmButton/ConfirmButton';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigator/navigator.types';
import {useTranslation} from 'react-i18next';

type AuthErrorScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.ERROR_SCREEN
>;

const AuthErrorScreen = (): JSX.Element => {
  const {t} = useTranslation();
  const {navigate} = useNavigation<AuthErrorScreenProp>();

  const onBtnPress = () => {
    navigate({name: ROUTES.LOGIN, params: undefined});
  };

  return (
    <ErrorScreenWrapper>
      <Text style={styles.title_error}>{t('authErrorScreen.errMessage')}</Text>
      <Text style={styles.message_error}>
        {t('authErrorScreen.notification')}
      </Text>
      <ConfirmButton onPress={onBtnPress} style={styles.button}>
        <Text style={styles.button_content}>
          {t('authErrorScreen.button_text')}
        </Text>
      </ConfirmButton>
    </ErrorScreenWrapper>
  );
};

export default AuthErrorScreen;
