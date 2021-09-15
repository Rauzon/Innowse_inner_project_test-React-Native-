import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainScreen from './modules/auth/main/Main.screen';
import RulesScreen from './modules/auth/rules/Rules.screen';
import ProfileScreen from './modules/Profile/Profile.screen';
import SplashScreen from './modules/auth/splash/Splash.screen';
import ScreenHeader from './modules/commonComponents/screenHeader/ScreenHeader';
import TabsComponentContainer from './tabs/TabsComponentContainer';
import ArticleScreen from './modules/community/news/articleScreen/Article.screen';
import useGetNews from './hooks/useGetNews';
import useGetBenefitsData from './hooks/useGetBenefitsData';
import CouponScreen from './modules/benefits/dicounts/CouponScreen/Coupon.screen';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  const newsData = useGetNews();
  const benefitsData = useGetBenefitsData();

  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="splash" component={SplashScreen} />
        <Screen name="login" component={MainScreen} />
        <Screen name="rules" component={RulesScreen} />
        <Screen name="app" component={TabsComponentContainer} />
        <Screen
          name="profile"
          options={{
            title: 'Профиль',
            headerShown: true,
            header: () => <ScreenHeader title={'Профиль'} />,
          }}
          component={ProfileScreen}
        />
        {newsData.map(item => {
          return (
            <Screen
              key={item.id}
              name={`news/${item.id}`}
              options={{
                headerShown: true,
                header: () => <ScreenHeader title={'Просмотр новости'} />,
              }}>
              {props => <ArticleScreen item={item} {...props} />}
            </Screen>
          );
        })}
        {benefitsData?.discountsData.map(item => {
          return (
            <Screen
              key={item.id}
              name={`discounts/${item.city}`}
              options={{
                headerShown: true,
                header: () => <ScreenHeader title={item.city} />,
              }}>
              {props => <CouponScreen discount={item} {...props} />}
            </Screen>
          );
        })}
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
