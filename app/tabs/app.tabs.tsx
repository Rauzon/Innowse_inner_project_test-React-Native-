import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideosScreen from '../modules/community/videos/Videos.screen';
import DiscountsScreen from '../modules/benefits/dicounts/Discounts.screen';
import FaqComponentScreen from '../modules/help/faq/FaqComponent.screen';
import CustomAppHeader from '../modules/commonComponents/customAppHeader/CustomAppHeader';
import s from './Tabs.styles';
import TabBarIcon from './components/tabBarIcon/TabBarIcon';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  const {tabBarStyle, shadow} = s;

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          ...tabBarStyle,
          ...shadow,
        },
      }}>
      <Screen
        name="videos"
        component={VideosScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={'community_icon'}
              label={'Сообщество'}
            />
          ),
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
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={'benefits_icon'}
              label={'Бонусы'}
            />
          ),
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
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={'support_icon'}
              label={'Помощь'}
            />
          ),
          header: () => (
            <CustomAppHeader
              rightBtnContent={'Служба Поддержки'}
              leftBtnContent={'FAQ  '}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tabs;
