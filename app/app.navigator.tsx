import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainScreen from './modules/auth/main/Main.screen';
import RulesScreen from './modules/auth/rules/Rules.screen';
import ProfileScreen from './modules/Profile/Profile.screen';
import SplashScreen from './modules/auth/splash/Splash.screen';
import ScreenHeader from './components/screenHeader/ScreenHeader';
import TabsComponentContainer from './tabs/TabsComponentContainer';
import ArticleScreen from './modules/community/news/articleScreen/Article.screen';
import CouponScreen from './modules/benefits/dicounts/CouponScreen/Coupon.screen';
import commonArticleScreen from './components/articleScreen/Article.screen';
import AuthErrorScreen from './components/errorScreen/authErrorScreen/AuthErrorScreen';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'splash'}>
        <Screen name="splash" component={SplashScreen} />
        <Screen name="login" component={MainScreen} />
        <Screen name="rules" component={RulesScreen} />
        <Screen name="app" component={TabsComponentContainer} />
        <Screen name="errorScreen" component={AuthErrorScreen} />
        <Screen
          name="profile"
          options={{
            title: 'Профиль',
            headerShown: true,
            header: () => <ScreenHeader title={'Профиль'} />,
          }}
          component={ProfileScreen}
        />
        <Screen
          name={'News'}
          options={{
            headerShown: true,
            header: () => <ScreenHeader title={'Просмотр новости'} />,
          }}
          component={ArticleScreen}
        />
        <Screen
          name={'Discounts'}
          options={{
            headerShown: true,
            header: ({route}) => <ScreenHeader title={route.params?.city} />,
          }}
          component={CouponScreen}
        />
        <Screen
          name={'FAQ'}
          options={{
            headerShown: true,
            header: ({route}) => <ScreenHeader title={route.params?.title} />,
          }}
          component={commonArticleScreen}
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
