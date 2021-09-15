import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import s from './Tabs.styles';
import TabBarIcon from './components/tabBarIcon/TabBarIcon';
import CommunityContainer from '../modules/community/CommunityContainer';
import BenefitsContainer from '../modules/benefits/BenefitsContainer';
import HelpContainer from '../modules/help/HelpContainer';

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
        component={CommunityContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={'community_icon'}
              label={'Сообщество'}
            />
          ),
          headerShown: false,
        }}
      />
      <Screen
        name="discounts"
        component={BenefitsContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={'benefits_icon'}
              label={'Бонусы'}
            />
          ),
          headerShown: false,
        }}
      />
      <Screen
        name="faq"
        component={HelpContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={'support_icon'}
              label={'Помощь'}
            />
          ),
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default Tabs;
