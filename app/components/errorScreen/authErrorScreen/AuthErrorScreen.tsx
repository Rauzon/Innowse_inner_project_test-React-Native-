import React from 'react';
import ErrorScreenWrapper from '../errorScreenWrapper/ErrorScreenWrapper';
import {Pressable, Text} from 'react-native';
import styles from './authErrorScreen.styles';
import {useNavigation} from '@react-navigation/native';

const AuthErrorScreen = (): JSX.Element => {
  const {navigate} = useNavigation();

  return (
    <ErrorScreenWrapper>
      <Text style={styles.title_error}>Не получилось войти</Text>
      <Text style={styles.message_error}>
        Попробуйте ещё раз, используя почту @innowise-group.com
      </Text>
      <Pressable style={styles.button} onPress={() => navigate('login')}>
        <Text style={styles.button_content}>Попробовать снова</Text>
      </Pressable>
    </ErrorScreenWrapper>
  );
};

export default AuthErrorScreen;
