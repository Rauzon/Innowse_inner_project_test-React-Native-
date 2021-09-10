import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideosScreen from '../modules/community/videos/Videos.screen';
import DiscountsScreen from '../modules/benefits/dicounts/Discounts.screen';
import FaqComponentScreen from '../modules/help/faq/FaqComponent.screen';
import CustomAppHeader from '../modules/commonComponents/customAppHeader/CustomAppHeader';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#FFF',
          shadowColor: 'transparent',
        },
      }}>
      <Screen
        name="videos"
        component={VideosScreen}
        options={{
          header: () => (
            <CustomAppHeader
              rightBtnContent={'Новости'}
              leftBtnContent={'Видео'}
            />
          ),
        }}
      />
      <Screen
        name="discounts"
        component={DiscountsScreen}
        options={{
          header: () => (
            <CustomAppHeader
              rightBtnContent={'Рефералка'}
              leftBtnContent={'Скидки'}
            />
          ),
        }}
      />
      <Screen
        name="faq"
        component={FaqComponentScreen}
        options={{
          header: () => (
            <CustomAppHeader
              rightBtnContent={'Служба Поддержки'}
              leftBtnContent={'FAQ'}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tabs;
