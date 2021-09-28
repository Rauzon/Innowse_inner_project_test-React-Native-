import React, {useEffect, useState} from 'react';
import styles from './header.styles';
import {Image, Pressable, View, Text} from 'react-native';
import DefaultAvatar from '../defaultAvatar/DefaultAvatar';
import {useNavigation} from '@react-navigation/native';
import useSetUserData from '../../hooks/useSetUserData';
import {LogoIcon, NotificationIcon} from '../../Icons';
import DroppedAndFadeView from '../droppedView/DroppedView';
import {ROUTES} from '../../constants';
import NotificationsList from '../notificationsList/NotificationsList';
import Count from '../count/Count';
import useGetNotificationsData from '../../hooks/useGetNotificationsData';

const Header = (): JSX.Element => {
  const {navigate} = useNavigation();
  const userData = useSetUserData();
  const data = useGetNotificationsData();
  const [visibleModal, setModalVisible] = useState<boolean>(false);
  const [firstModalOpen, onFirstModalOpen] = useState<boolean>(false);
  const [unreadMessagesCount, setMessageCount] = useState<number>(0);

  useEffect(() => {
    const notViewedItems = data?.filter(item => !item.isViewed);
    if (notViewedItems) {
      setMessageCount(notViewedItems.length);
    }
  }, [data]);

  const onProfileIconPress = () => {
    navigate(ROUTES.PROFILE);
  };

  const onBtnPress = () => {
    setModalVisible(prev => !prev);
    if (!firstModalOpen) {
      onFirstModalOpen(true);
    }
  };

  // const changeIsViewedStatus = (itemId: string) => {
  //   notificationService.setItemIsViewedById(itemId);
  // };

  const onGetAllNotificationsPress = () => {
    navigate(ROUTES.NOTIFICATION);
  };

  return (
    <>
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
      {firstModalOpen && (
        <DroppedAndFadeView isOpened={visibleModal} style={styles.modal}>
          <>
            <NotificationsList isNotificationScreen={false} data={data} />
            <Pressable
              onPress={onGetAllNotificationsPress}
              style={styles.notification_button_wrapper}>
              <Text style={styles.notification_button}>Все уведомления</Text>
            </Pressable>
          </>
        </DroppedAndFadeView>
      )}
    </>
  );
};

export default Header;
