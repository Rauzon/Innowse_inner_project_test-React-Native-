import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainScreen from './modules/auth/Main/Main.screen';
import RulesScreen from './modules/auth/rules/Rules.screen';
import ProfileScreen from './modules/Profile/Profile.screen';
import SplashScreen from './modules/auth/splash/Splash.screen';
import ProfileHeader from './modules/Profile/components/ProfileHeader';
import CommunityScreen from './modules/community/videos/Videos.screen';
import TabsComponentContainer from './tabs/TabsComponentContainer';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/*<Screen name="splash" component={SplashScreen} />*/}
        {/*<Screen name="login" component={MainScreen} />*/}
        {/*<Screen name="rules" component={RulesScreen} />*/}
        <Screen name="app" component={TabsComponentContainer} />
        {/*<Screen*/}
        {/*  name="profile"*/}
        {/*  options={{*/}
        {/*    title: 'Профиль',*/}
        {/*    headerShown: true,*/}
        {/*    header: () => <ProfileHeader />,*/}
        {/*  }}*/}
        {/*  component={ProfileScreen}*/}
        {/*/>*/}
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
