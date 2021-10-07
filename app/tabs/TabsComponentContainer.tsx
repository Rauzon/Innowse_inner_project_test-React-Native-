import React from 'react';
import Tabs from './App.tabs';
import HeaderContainer from '../components/HeaderContainer/HeaderContainer';

const TabsComponentContainer = (): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <Tabs />
    </>
  );
};

export default TabsComponentContainer;
