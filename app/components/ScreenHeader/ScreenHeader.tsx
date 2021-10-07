import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './screenHeader.styles';
import {BackIcon} from '../../Icons';
import {useTranslation} from 'react-i18next';

interface IHeader {
  title?: string;
}

const ScreenHeader = ({title}: IHeader) => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const onPressHandler = () => navigation.goBack();

  return (
    <View style={styles.header}>
      <Pressable onPress={onPressHandler} style={styles.header_button}>
        <BackIcon />
      </Pressable>
      <Text style={styles.header_content}>{t(`profileScreen.${title}`)}</Text>
      <Text />
    </View>
  );
};

export default ScreenHeader;
