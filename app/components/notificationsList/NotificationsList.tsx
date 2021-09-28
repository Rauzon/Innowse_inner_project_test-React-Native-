import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {INotificationDataType} from '../../hooks/useGetNotificationsData';
import NotificationItem from '../notificationItem/NotificationItem';
import {COUNTS_ITEMS_IN_LIST} from '../../constants';

interface INotificationsListProps {
  isNotificationScreen: boolean;
  data: INotificationDataType[] | null;
}

const NotificationsList = memo(
  ({isNotificationScreen, data}: INotificationsListProps): JSX.Element => {
    const [sortedData, setSortedData] = useState<INotificationDataType[]>([]);
    useEffect(() => {
      const resultData = !isNotificationScreen
        ? data?.filter((_, i) => i < COUNTS_ITEMS_IN_LIST)
        : data;
      if (resultData?.length) {
        setSortedData(resultData);
      }
    }, [data, isNotificationScreen]);

    return (
      <FlatList
        data={sortedData}
        renderItem={({item, index}) => {
          return (
            <NotificationItem
              isLastItem={index === sortedData.length - 1}
              isFirstItem={index === 0}
              key={item.id}
              item={item}
            />
          );
        }}
      />
    );
  },
);

export default NotificationsList;
