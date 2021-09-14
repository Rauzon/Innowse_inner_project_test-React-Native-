import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideosScreen from '../modules/community/videos/Videos.screen';
import DiscountsScreen from '../modules/benefits/dicounts/Discounts.screen';
import FaqComponentScreen from '../modules/help/faq/FaqComponent.screen';
import CustomAppHeader from '../modules/commonComponents/customAppHeader/CustomAppHeader';
import s from './Tabs.styles';
import TabBarIcon from './components/tabBarIcon/TabBarIcon';
import useButtonsSwitch from '../hooks/useButtonsSwitch';
import SupportScreen from '../modules/help/support/Support.screen';
import ReferralScreen from '../modules/benefits/referals/Referral.screen';
import NewsScreen from '../modules/community/news/News.screen';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  const {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  } = useButtonsSwitch();

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
        component={isLeftButtonPressed ? VideosScreen : NewsScreen}
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
              isLeftButtonPressed={isLeftButtonPressed}
              isRightButtonPressed={isRightButtonPressed}
              pressRightButton={pressRightButton}
              pressLeftButton={pressLeftButton}
            />
          ),
        }}
      />
      <Screen
        name="discounts"
        component={isLeftButtonPressed ? DiscountsScreen : ReferralScreen}
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
              isRightButtonPressed={isRightButtonPressed}
              isLeftButtonPressed={isLeftButtonPressed}
              pressLeftButton={pressLeftButton}
              pressRightButton={pressRightButton}
            />
          ),
        }}
      />
      <Screen
        name="faq"
        component={isLeftButtonPressed ? FaqComponentScreen : SupportScreen}
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
              leftBtnContent={'FAQ'}
              isLeftButtonPressed={isLeftButtonPressed}
              isRightButtonPressed={isRightButtonPressed}
              pressRightButton={pressRightButton}
              pressLeftButton={pressLeftButton}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tabs;
