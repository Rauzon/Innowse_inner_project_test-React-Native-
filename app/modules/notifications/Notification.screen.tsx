import React from 'react';
import useGetNotificationsData from '../../hooks/useGetNotificationsData';
import NotificationsList from '../../components/notificationsList/NotificationsList';
import {Text, View} from 'react-native';
import ConfirmButton from '../../components/confirmButton/ConfirmButton';
import useGetFilteredNotificationsData from '../../hooks/useGetFilteredNotificationsData';
import styles from './notifications.styles';

const NotificationScreen = (): JSX.Element => {
  const {categories, data} = useGetNotificationsData();
  const {onBtnPress, chosenCategory, currentData, setAllMessagesViewedPress} =
    useGetFilteredNotificationsData(data);
  return (
    <>
      <NotificationsList
        isNotificationScreen={true}
        data={currentData}
        categories={categories}
        onChangeCategoryPress={onBtnPress}
        chosenCategory={chosenCategory}
      />
      <View style={styles.button_wrapper}>
        <ConfirmButton
          style={styles.button}
          onPress={setAllMessagesViewedPress}>
          <Text style={styles.button_content}>
            Отметить все как прочитанные
          </Text>
        </ConfirmButton>
      </View>
    </>
  );
};

export default NotificationScreen;
