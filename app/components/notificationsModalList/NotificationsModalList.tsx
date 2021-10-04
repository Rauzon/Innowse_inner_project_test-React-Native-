import React, {memo} from 'react';
import DroppedAndFadeView from '../droppedView/DroppedView';
import styles from './notificationsModal.styles';
import NotificationsList from '../notificationsList/NotificationsList';
import {Pressable, Text} from 'react-native';
import {INotificationDataType} from '../../hooks/useGetNotificationsData';

interface NotificationsModalList {
  visibleModal: boolean;
  onGetAllNotificationsPress(): void;
  data: INotificationDataType[] | null;
}

const NotificationsModalList = memo(
  ({
    visibleModal,
    onGetAllNotificationsPress,
    data,
  }: NotificationsModalList): JSX.Element => {
    return (
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
    );
  },
);

export default NotificationsModalList;
