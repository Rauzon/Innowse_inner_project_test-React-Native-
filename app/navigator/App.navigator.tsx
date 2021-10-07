import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainScreen from '../modules/auth/Main/Main.screen';
import RulesScreen from '../modules/auth/Rules/Rules.screen';
import ProfileScreen from '../modules/Profile/Profile.screen';
import SplashScreen from '../modules/auth/Splash/Splash.screen';
import ScreenHeader from '../components/ScreenHeader/ScreenHeader';
import TabsComponentContainer from '../tabs/TabsComponentContainer';
import ArticleScreen from '../modules/Community/News/ArticleScreen/Article.screen';
import CouponScreen from '../modules/Benefits/Dicounts/CouponScreen/Coupon.screen';
import commonArticleScreen from '../components/ArticleScreen/Article.screen';
import AuthErrorScreen from '../components/errorScreen/AuthErrorScreen/AuthErrorScreen';
import NotificationScreen from '../modules/Notifications/Notification.screen';
import {ROUTES} from '../constants';
import FoodMessageScreen from '../modules/AddContent/FoodMessage/FoodMessage.screen';
import {RootStackParamList} from './navigator.types';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const {
    APP,
    FAQ,
    ERROR_SCREEN,
    LOGIN,
    NEWS,
    RULES,
    NOTIFICATION,
    PROFILE,
    SPLASH,
    DISCOUNTS,
    FOOD_MESSAGE,
  } = ROUTES;

  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator initialRouteName={SPLASH}>
        <Screen
          name={SPLASH}
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Screen
          name={LOGIN}
          options={{headerShown: false}}
          component={MainScreen}
        />
        <Screen
          name={RULES}
          options={{headerShown: false}}
          component={RulesScreen}
        />
        <Screen
          name={APP}
          options={{headerShown: false}}
          component={TabsComponentContainer}
        />
        <Screen
          name={ERROR_SCREEN}
          options={{headerShown: false}}
          component={AuthErrorScreen}
        />
        <Screen
          name={PROFILE}
          options={{
            header: props => <ScreenHeader title={'profile'} {...props} />,
          }}
          component={ProfileScreen}
        />
        <Screen
          name={NEWS}
          options={{
            header: props => <ScreenHeader title={'watchNew'} {...props} />,
          }}
          component={ArticleScreen}
        />
        <Screen
          name={DISCOUNTS}
          options={({route}) => ({
            header: () => <ScreenHeader title={route.params?.city} />,
          })}
          component={CouponScreen}
        />
        <Screen
          name={FAQ}
          options={({route}) => ({
            header: () => <ScreenHeader title={route.params.title} />,
          })}
          component={commonArticleScreen}
        />
        <Screen
          name={NOTIFICATION}
          options={{
            header: () => <ScreenHeader title={'Notifications'} />,
          }}
          component={NotificationScreen}
        />
        <Screen
          name={FOOD_MESSAGE}
          options={{
            header: () => <ScreenHeader title={'iBroughtFood'} />,
          }}
          component={FoodMessageScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFF',
    background: '#FFF',
  },
};

export default AppNavigator;
