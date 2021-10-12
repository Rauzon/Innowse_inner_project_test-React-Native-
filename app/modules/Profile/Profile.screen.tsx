import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AvatarComponent from './profileComponents/AvatarComponent/AvatarComponent';
import authService from '../../services/auth/auth.service';
import useSetUserData from '../../hooks/useSetUserData';
import styles from './profile.styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/appScreenNavigation/navigator.types';
import {useTranslation} from 'react-i18next';

type ProfileScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.PROFILE
>;

const ProfileScreen = (): JSX.Element => {
  const {t} = useTranslation();
  const user = useSetUserData();
  const {navigate} = useNavigation<ProfileScreenProp>();

  const onSignOut = async () => {
    await authService.signOut();
    navigate({name: ROUTES.LOGIN, params: undefined});
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
              {user?.name
                ? `${user.name} ${user.surname}`
                : t('profileScreen.user')}
            </Text>
            <Text style={styles.content__block_email}>{user?.email}</Text>
          </View>
          <Pressable style={styles.logout__button} onPress={onSignOut}>
            <Text style={styles.logout__button_content}>
              {t('profileScreen.logOut')}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
