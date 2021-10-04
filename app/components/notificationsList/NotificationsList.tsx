import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {INotificationDataType} from '../../hooks/useGetNotificationsData';
import NotificationItem from '../notificationItem/NotificationItem';
import {COUNTS_ITEMS_IN_MODAL_LIST} from '../../constants';
import ButtonsHeader from '../buttonsHeader/ButtonsHeader';

interface INotificationsList {
  isNotificationScreen: boolean;
  data: INotificationDataType[] | null;
  categories?: string[];
  chosenCategory?: string;
  onChangeCategoryPress?: (category: string) => void;
}

const NotificationsList = memo(
  ({
    isNotificationScreen,
    data,
    onChangeCategoryPress,
    categories,
    chosenCategory,
  }: INotificationsList): JSX.Element => {
    const [sortedData, setSortedData] = useState<INotificationDataType[]>([]);
    useEffect(() => {
      const resultData = !isNotificationScreen
        ? data?.filter((_, i) => i < COUNTS_ITEMS_IN_MODAL_LIST)
        : data;
      setSortedData(resultData!);
    }, [data, isNotificationScreen]);

    return (
      <FlatList
        data={sortedData}
        ListHeaderComponent={() =>
          isNotificationScreen ? (
            <ButtonsHeader
              categories={categories}
              chosenCategory={chosenCategory}
              onBtnPress={onChangeCategoryPress}
            />
          ) : (
            <></>
          )
        }
        renderItem={({item, index}) => {
          return (
            <NotificationItem
              isLastItem={index === sortedData.length - 1}
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
