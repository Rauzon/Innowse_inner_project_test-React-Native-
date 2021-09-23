import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './screenHeader.styles';
import {BackIcon} from '../../Icons';

interface IHeaderPops {
  title?: string;
}

const ScreenHeader = ({title}: IHeaderPops) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.header_button}>
        <BackIcon />
      </Pressable>
      <Text style={styles.header_content}>{title}</Text>
      <Text />
    </View>
  );
};

export default ScreenHeader;
