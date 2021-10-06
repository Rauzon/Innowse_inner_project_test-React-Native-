import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './notificationItem.styles';
import {NOTIFICATIONS_CATEGORIES} from '../../constants';
import {FoodNotificationIcon, NewsNotificationIcon} from '../../Icons';
import {INotificationDataType} from '../../hooks/useGetNotificationsData';
import notificationService from '../../services/notifications/notification.service';
import {useTranslation} from 'react-i18next';

interface INotificationItem {
  item: INotificationDataType;
  isLastItem?: boolean;
}

const NotificationItem = memo(
  ({item, isLastItem}: INotificationItem): JSX.Element => {
    const {isViewed, category, pastTime, title, id} = item;
    const {t} = useTranslation();
    const styleConditions = isLastItem
      ? [styles.container, styles.container_border]
      : [styles.container, styles.container_border];

    const onButtonPress = () => {};

    const OnCardPress = (itemId: string) => {
      notificationService.setItemIsViewedById(itemId);
    };
    return (
      <Pressable
        style={
          isViewed ? styleConditions : [styleConditions, styles.item_viewed]
        }
        onPress={() => OnCardPress(id)}>
        <View style={styles.icon_wrapper}>
          {category === NOTIFICATIONS_CATEGORIES.NEWS ? (
            <NewsNotificationIcon />
          ) : (
            <FoodNotificationIcon />
          )}
        </View>
        <View style={styles.content_wrapper}>
          <Text style={styles.time}>{pastTime}</Text>
          {category === NOTIFICATIONS_CATEGORIES.NEWS ? (
            <Text style={styles.title}>{t('notificationScreen.freshNew')}</Text>
          ) : (
            <Text style={styles.title}>
              {t('notificationScreen.foodInOffice')}
            </Text>
          )}
          <Text style={styles.content}>{title}</Text>
          {category === NOTIFICATIONS_CATEGORIES.NEWS && (
            <Pressable onPress={onButtonPress} style={styles.button_wrapper}>
              <Text style={styles.button_content}>
                {t('notificationScreen.goToNews')}
              </Text>
            </Pressable>
          )}
        </View>
      </Pressable>
    );
  },
);

export default NotificationItem;
