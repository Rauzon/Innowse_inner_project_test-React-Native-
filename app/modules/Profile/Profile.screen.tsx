import React, {useEffect, useState, memo} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AvatarComponent from './components/AvatarComponent';
import authService from '../../services/auth/auth.service';
import {UserType} from '../../services/auth/auth.types';

interface IProfileScreenProps {
  navigation: any;
}

const ProfileScreen = memo(({navigation}: IProfileScreenProps): JSX.Element => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const userData = authService.authState$.value.user;
    if (userData) {
      setUser(userData);
    }
  }, []);

  const onSignOut = async () => {
    await authService.signOut();
    navigation.navigate('login');
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
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 370,
    height: 115,
    margin: 16,
  },
  avatar__block: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  content__block: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  logout__button: {
    width: 118,
    height: 42,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C32D2C',
    borderRadius: 10,
  },
  logout__button_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
  content__block_name: {
    paddingTop: 20,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#333333',
  },
  content__block_email: {
    marginTop: 4,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#828282',
  },
});

export default ProfileScreen;
