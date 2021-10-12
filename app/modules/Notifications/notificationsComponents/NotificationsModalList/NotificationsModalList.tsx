import React, {memo} from 'react';
import DroppedAndFadeView from '../../../../components/DroppedView/DroppedView';
import styles from './notificationsModal.styles';
import NotificationsList from '../NotificationsList/NotificationsList';
import {Pressable, Text} from 'react-native';
import {INotificationDataType} from '../../../../hooks/useGetNotificationsData';
import {useTranslation} from 'react-i18next';

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
    const {t} = useTranslation();
    return (
      <DroppedAndFadeView isOpened={visibleModal} style={styles.modal}>
        <>
          <NotificationsList isNotificationScreen={false} data={data} />
          <Pressable
            onPress={onGetAllNotificationsPress}
            style={styles.notification_button_wrapper}>
            <Text style={styles.notification_button}>
              {t('notificationScreen.allNotifications')}
            </Text>
          </Pressable>
        </>
      </DroppedAndFadeView>
    );
  },
);

export default NotificationsModalList;
