import React, {memo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {LogoIcon, NotificationIcon} from '../../../Icons';
import Count from '../../count/Count';
import DefaultAvatar from '../../defaultAvatar/DefaultAvatar';
import {UserType} from '../../../services/users/user.types';
import styles from './header.styles';

interface IHeaderProps {
  onBtnPress(): void;
  unreadMessagesCount: number;
  onProfileIconPress(): void;
  userData: UserType | null;
}

const Header = memo(
  ({
    onBtnPress,
    unreadMessagesCount,
    onProfileIconPress,
    userData,
  }: IHeaderProps): JSX.Element => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <LogoIcon />
        </View>
        <View style={styles.container_wrapper}>
          <Pressable
            onLongPress={onBtnPress}
            onPress={onBtnPress}
            style={styles.notification_wrapper}>
            <NotificationIcon />
            {unreadMessagesCount ? (
              <Count style={styles.unreadMessage_icon}>
                <Text style={styles.unreadMessage_icon_content}>
                  {unreadMessagesCount}
                </Text>
              </Count>
            ) : (
              <></>
            )}
          </Pressable>
          <Pressable onPress={onProfileIconPress}>
            {userData?.photoUrl ? (
              <Image
                source={{uri: userData.photoUrl}}
                style={styles.avatar_icon}
              />
            ) : (
              <DefaultAvatar
                initials={userData?.initials}
                componentStyle={styles}
              />
            )}
          </Pressable>
        </View>
      </View>
    );
  },
);

export default Header;
