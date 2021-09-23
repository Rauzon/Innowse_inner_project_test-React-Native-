import React from 'react';
import styles from './header.styles';
import {Image, Pressable, View} from 'react-native';
import DefaultAvatar from '../../../components/defaultAvatar/DefaultAvatar';
import {useNavigation} from '@react-navigation/native';
import useSetUserData from '../../../hooks/useSetUserData';
import {LogoIcon} from '../../../Icons';

const Header = (): JSX.Element => {
  const {navigate} = useNavigation();
  const userData = useSetUserData();

  const onProfileIconPress = () => {
    navigate('profile');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <LogoIcon />
      </View>
      <Pressable onPress={onProfileIconPress} style={styles.container_wrapper}>
        {userData?.photoUrl ? (
          <Image source={{uri: userData.photoUrl}} style={styles.avatar_icon} />
        ) : (
          <DefaultAvatar
            initials={userData?.initials}
            componentStyle={styles}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Header;
