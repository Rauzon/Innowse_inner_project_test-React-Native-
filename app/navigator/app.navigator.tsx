import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainScreen from '../modules/auth/main/Main.screen';
import RulesScreen from '../modules/auth/rules/Rules.screen';
import ProfileScreen from '../modules/Profile/Profile.screen';
import SplashScreen from '../modules/auth/splash/Splash.screen';
import ScreenHeader from '../components/screenHeader/ScreenHeader';
import TabsComponentContainer from '../tabs/TabsComponentContainer';
import ArticleScreen from '../modules/community/news/articleScreen/Article.screen';
import CouponScreen from '../modules/benefits/dicounts/CouponScreen/Coupon.screen';
import commonArticleScreen from '../components/articleScreen/Article.screen';
import AuthErrorScreen from '../components/errorScreen/authErrorScreen/AuthErrorScreen';
import NotificationScreen from '../modules/notifications/Notification.screen';
import {ROUTES} from '../constants';
import FoodMessageScreen from '../modules/addContent/foodMessage/FoodMessage.screen';
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
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SPLASH}>
        <Screen name={SPLASH} component={SplashScreen} />
        <Screen name={LOGIN} component={MainScreen} />
        <Screen name={RULES} component={RulesScreen} />
        <Screen name={APP} component={TabsComponentContainer} />
        <Screen name={ERROR_SCREEN} component={AuthErrorScreen} />
        <Screen
          name={PROFILE}
          options={{
            title: 'Профиль',
            headerShown: true,
            header: props => <ScreenHeader title={'Профиль'} {...props} />,
          }}
          component={ProfileScreen}
        />
        <Screen
          name={NEWS}
          options={{
            headerShown: true,
            header: props => (
              <ScreenHeader title={'Просмотр новости'} {...props} />
            ),
          }}
          component={ArticleScreen}
        />
        <Screen
          name={DISCOUNTS}
          options={({route}) => ({
            headerShown: true,
            header: () => <ScreenHeader title={route.params?.city} />,
          })}
          component={CouponScreen}
        />
        <Screen
          name={FAQ}
          options={({route}) => ({
            headerShown: true,
            header: () => <ScreenHeader title={route.params.title} />,
          })}
          component={commonArticleScreen}
        />
        <Screen
          name={NOTIFICATION}
          options={{
            headerShown: true,
            header: () => <ScreenHeader title={'Уведомления'} />,
          }}
          component={NotificationScreen}
        />
        <Screen
          name={FOOD_MESSAGE}
          options={{
            headerShown: true,
            header: () => <ScreenHeader title={'Я принёс еду'} />,
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
