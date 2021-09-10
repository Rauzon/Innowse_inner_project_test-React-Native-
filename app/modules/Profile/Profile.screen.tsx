import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import AvatarComponent from './components/AvatarComponent';
import authService from '../../services/auth/auth.service';
import useSetUserData from '../../hooks/useSetUserData';
import s from './profile.styles';

interface IProfileScreenProps {
  navigation: any;
}

const ProfileScreen = memo(({navigation}: IProfileScreenProps): JSX.Element => {
  const user = useSetUserData();

  const onSignOut = async () => {
    await authService.signOut();
    navigation.navigate('login');
  };

  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <View style={s.avatar__block}>
          <AvatarComponent
            initials={user?.initials}
            photoUrl={user?.photoUrl}
          />
        </View>
        <View style={s.content__block}>
          <View>
            <Text style={s.content__block_name}>
              {user?.name ? `${user.name} ${user.surname}` : 'User'}
            </Text>
            <Text style={s.content__block_email}>{user?.email}</Text>
          </View>
          <Pressable style={s.logout__button} onPress={onSignOut}>
            <Text style={s.logout__button_content}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

export default ProfileScreen;
