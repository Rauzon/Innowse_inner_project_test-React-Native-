import React, {memo} from 'react';
import s from '../Tabs.styles';
import {Image, Pressable, View} from 'react-native';
import DefaultAvatar from '../../modules/commonComponents/defaultAvatar/DefaultAvatar';
import {useNavigation} from '@react-navigation/native';

interface IHeaderProps {}

const Header = memo(({}: IHeaderProps): JSX.Element => {
  const {navigate} = useNavigation();

  const onProfileIconPress = () => {
    navigate('profile');
  };

  return (
    <View style={s.wrapper}>
      <View style={s.logo}>
        <Image
          style={s.logo_img}
          source={require('../../assets/img/logo.png')}
        />
      </View>
      <Pressable onPress={onProfileIconPress} style={s.container_wrapper}>
        <DefaultAvatar componentStyle={s} />
      </Pressable>
    </View>
  );
});

export default Header;
