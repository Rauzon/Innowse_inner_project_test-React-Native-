import React, {memo} from 'react';
import Tabs from './app.tabs';
import Header from './components/Header';

const TabsComponentContainer = memo((): JSX.Element => {
  return (
    <>
      <Header />
      <Tabs />
    </>
  );
});

export default TabsComponentContainer;
