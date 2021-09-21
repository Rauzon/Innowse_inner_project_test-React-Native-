import React, {memo} from 'react';
import styles from './header.styles';
import {Image, Pressable, View} from 'react-native';
import DefaultAvatar from '../../../components/defaultAvatar/DefaultAvatar';
import {useNavigation} from '@react-navigation/native';
import {UserType} from '../../../services/users/user.types';

interface IHeaderProps {
  userData: UserType | null;
}

const Header = memo(({userData}: IHeaderProps): JSX.Element => {
  const {navigate} = useNavigation();

  const onProfileIconPress = () => {
    navigate('profile');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Image
          style={styles.logo_img}
          source={require('../../../assets/img/logo.png')}
        />
      </View>
      <Pressable onPress={onProfileIconPress} style={styles.container_wrapper}>
        {userData?.photoUrl ? (
          <Image source={{uri: userData.photoUrl}} style={styles.avatar_icon} />
        ) : (
          <DefaultAvatar initials={userData?.initials} componentStyle={styles} />
        )}
      </Pressable>
    </View>
  );
});

export default Header;
