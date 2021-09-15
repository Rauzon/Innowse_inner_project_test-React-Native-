import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import s from './screenHeader.styles';

interface IHeaderPops {
  title: string;
}

const ScreenHeader = ({title}: IHeaderPops) => {
  const navigation = useNavigation();

  return (
    <View style={s.header}>
      <Pressable onPress={() => navigation.goBack()} style={s.header_button}>
        <Image source={require('../../../assets/img/Back.png')} />
      </Pressable>
      <Text style={s.header_content}>{title}</Text>
      <Text />
    </View>
  );
};

export default ScreenHeader;
