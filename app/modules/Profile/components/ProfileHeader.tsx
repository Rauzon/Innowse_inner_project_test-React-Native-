import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface IHeaderPops {}

const ProfileHeader = ({}: IHeaderPops) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.header_button}>
        <Image source={require('../../../assets/img/Back.png')} />
      </Pressable>
      <Text style={styles.header_content}>Профиль</Text>
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#FFF',
  },
  header_button: {
    marginLeft: 18,
  },
  header_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: '#333333',
    paddingRight: 18,
  },
});

export default ProfileHeader;
