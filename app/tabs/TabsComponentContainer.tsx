import React, {memo} from 'react';
import Tabs from './app.tabs';
import Header from './components/header/Header';
import useSetUserData from '../hooks/useSetUserData';

const TabsComponentContainer = memo((): JSX.Element => {
  const userData = useSetUserData();

  return (
    <>
      <Header userData={userData} />
      <Tabs />
    </>
  );
});

export default TabsComponentContainer;
