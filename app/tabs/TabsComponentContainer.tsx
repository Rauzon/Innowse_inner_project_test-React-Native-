import React from 'react';
import Tabs from './app.tabs';
import HeaderContainer from '../components/headerContainer/HeaderContainer';

const TabsComponentContainer = (): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <Tabs />
    </>
  );
};

export default TabsComponentContainer;
