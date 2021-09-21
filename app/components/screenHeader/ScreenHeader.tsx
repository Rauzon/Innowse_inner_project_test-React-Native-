import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './screenHeader.styles';

interface IHeaderPops {
  title?: string;
}

const ScreenHeader = ({title}: IHeaderPops) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.header_button}>
        <Image source={require('../../assets/img/Back.png')} />
      </Pressable>
      <Text style={styles.header_content}>{title}</Text>
      <Text />
    </View>
  );
};

export default ScreenHeader;
