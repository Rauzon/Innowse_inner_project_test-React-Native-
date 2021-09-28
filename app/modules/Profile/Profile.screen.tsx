import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AvatarComponent from './components/avatarComponent/AvatarComponent';
import authService from '../../services/auth/auth.service';
import useSetUserData from '../../hooks/useSetUserData';
import styles from './profile.styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';

const ProfileScreen = (): JSX.Element => {
  const user = useSetUserData();
  const {navigate} = useNavigation();

  const onSignOut = async () => {
    await authService.signOut();
    navigate(ROUTES.LOGIN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.avatar__block}>
          <AvatarComponent
            initials={user?.initials}
            photoUrl={user?.photoUrl}
          />
        </View>
        <View style={styles.content__block}>
          <View>
            <Text style={styles.content__block_name}>
              {user?.name ? `${user.name} ${user.surname}` : 'User'}
            </Text>
            <Text style={styles.content__block_email}>{user?.email}</Text>
          </View>
          <Pressable style={styles.logout__button} onPress={onSignOut}>
            <Text style={styles.logout__button_content}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
