import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './tabs.styles';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import CommunityContainer from '../modules/Community/CommunityContainer';
import BenefitsContainer from '../modules/Benefits/BenefitsContainer';
import HelpContainer from '../modules/Help/HelpContainer';
import {ROUTES} from '../constants';
import {
  BenefitsTabIcon,
  CommunityTabIcon,
  HelpTabIcon,
  MoreTabIcon,
} from '../Icons';
import AddContentScreen from '../modules/AddContent/AddContent.screen';
import {RootStackTabsParamsList} from './tabs.types';

const {Navigator, Screen} = createBottomTabNavigator<RootStackTabsParamsList>();

const Tabs = () => {
  const {tabBarStyle, shadow} = styles;
  const {FAQ_TAB, DISCOUNTS_TAB, VIDEOS_TAB, ADD_CONTENT_TAB} = ROUTES;

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        headerStyle: {
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          ...tabBarStyle,
          ...shadow,
        },
      }}>
      <Screen
        name={VIDEOS_TAB}
        component={CommunityContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={<CommunityTabIcon isFocused={focused} />}
              label={'community'}
            />
          ),
        }}
      />
      <Screen
        name={DISCOUNTS_TAB}
        component={BenefitsContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={<BenefitsTabIcon isFocused={focused} />}
              label={'benefits'}
            />
          ),
        }}
      />
      <Screen
        name={FAQ_TAB}
        component={HelpContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={<HelpTabIcon isFocused={focused} />}
              label={'help'}
            />
          ),
        }}
      />
      <Screen
        name={ADD_CONTENT_TAB}
        component={AddContentScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              isFocused={focused}
              icon={<MoreTabIcon isFocused={focused} />}
              label={'more'}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tabs;
