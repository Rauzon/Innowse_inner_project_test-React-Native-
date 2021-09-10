import React, {memo} from 'react';
import s from './header.styles';
import {Image, Pressable, View} from 'react-native';
import DefaultAvatar from '../../../modules/commonComponents/defaultAvatar/DefaultAvatar';
import {useNavigation} from '@react-navigation/native';
import {UserType} from '../../../services/auth/auth.types';

interface IHeaderProps {
  userData: UserType | null;
}

const Header = memo(({userData}: IHeaderProps): JSX.Element => {
  const {navigate} = useNavigation();

  const onProfileIconPress = () => {
    navigate('profile');
  };

  return (
    <View style={s.wrapper}>
      <View style={s.logo}>
        <Image
          style={s.logo_img}
          source={require('../../../assets/img/logo.png')}
        />
      </View>
      <Pressable onPress={onProfileIconPress} style={s.container_wrapper}>
        {userData?.photoUrl ? (
          <Image source={{uri: userData.photoUrl}} style={s.avatar_icon} />
        ) : (
          <DefaultAvatar initials={userData?.initials} componentStyle={s} />
        )}
      </Pressable>
    </View>
  );
});

export default Header;
