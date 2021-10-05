import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './Tabs.styles';
import TabBarIcon from '../components/tabBarIcon/TabBarIcon';
import CommunityContainer from '../modules/community/CommunityContainer';
import BenefitsContainer from '../modules/benefits/BenefitsContainer';
import HelpContainer from '../modules/help/HelpContainer';
import {ROUTES} from '../constants';
import {
  BenefitsTabIcon,
  CommunityTabIcon,
  HelpTabIcon,
  MoreTabIcon,
} from '../Icons';
import AddContentScreen from '../modules/addContent/AddContent.screen';
import {RootStackTabsParamsList} from './tabs.types';

const {Navigator, Screen} = createBottomTabNavigator<RootStackTabsParamsList>();

const Tabs = () => {
  const {tabBarStyle, shadow} = styles;
  const {FAQ_TAB, DISCOUNTS_TAB, VIDEOS_TAB, ADD_CONTENT_TAB} = ROUTES;

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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default Tabs;
