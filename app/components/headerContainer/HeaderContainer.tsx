import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useSetUserData from '../../hooks/useSetUserData';
import {ROUTES} from '../../constants';
import useGetNotificationsData from '../../hooks/useGetNotificationsData';
import NotificationsModalList from '../notificationsModalList/NotificationsModalList';
import Header from './header/Header';

const HeaderContainer = (): JSX.Element => {
  const {navigate} = useNavigation();
  const userData = useSetUserData();
  const {data} = useGetNotificationsData();
  const [visibleModal, setModalVisible] = useState<boolean>(false);
  const [firstModalOpen, onFirstModalOpen] = useState<boolean>(false);
  const [unreadMessagesCount, setMessageCount] = useState<number>(0);

  useEffect(() => {
    const notViewedItems = data?.filter(item => !item.isViewed);
    if (notViewedItems) {
      setMessageCount(notViewedItems.length);
    }
  }, [data]);

  const onProfileIconPress = useCallback(() => {
    navigate(ROUTES.PROFILE);
  }, [navigate]);

  const onBtnPress = useCallback(() => {
    setModalVisible(prev => !prev);
    if (!firstModalOpen) {
      onFirstModalOpen(true);
    }
  }, [firstModalOpen]);

  const onGetAllNotificationsPress = useCallback(() => {
    navigate(ROUTES.NOTIFICATION);
  }, [navigate]);

  return (
    <>
      <Header
        onBtnPress={onBtnPress}
        onProfileIconPress={onProfileIconPress}
        userData={userData}
        unreadMessagesCount={unreadMessagesCount}
      />
      {firstModalOpen && (
        <NotificationsModalList
          visibleModal={visibleModal}
          data={data}
          onGetAllNotificationsPress={onGetAllNotificationsPress}
        />
      )}
    </>
  );
};

export default HeaderContainer;
