import React, {memo, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {INotificationDataType} from '../../../../hooks/useGetNotificationsData';
import NotificationItem from '../NotificationItem/NotificationItem';
import {COUNTS_ITEMS_IN_MODAL_LIST} from '../../../../constants';
import ButtonsHeader from '../../../../components/ButtonsHeader/ButtonsHeader';

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

    const header = () =>
      isNotificationScreen ? (
        <ButtonsHeader
          categories={categories}
          chosenCategory={chosenCategory}
          onBtnPress={onChangeCategoryPress}
        />
      ) : (
        <></>
      );

    const renderItem = ({
      item,
      index,
    }: ListRenderItemInfo<INotificationDataType>) => {
      return (
        <NotificationItem
          isLastItem={index === sortedData.length - 1}
          key={item.id}
          item={item}
        />
      );
    };

    return (
      <FlatList
        data={sortedData}
        ListHeaderComponent={header}
        renderItem={renderItem}
      />
    );
  },
);

export default NotificationsList;
