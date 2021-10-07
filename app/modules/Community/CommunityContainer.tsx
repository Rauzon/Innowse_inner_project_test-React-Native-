import React from 'react';
import {View} from 'react-native';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import VideosScreen from './Videos/Videos.screen';
import NewsScreen from './News/News.screen';

const CommunityContainer = (): JSX.Element => {
  const {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  } = useButtonsSwitch();

  return (
    <View>
      {isLeftButtonPressed ? (
        <VideosScreen
          isLeftButtonPressed={isLeftButtonPressed}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          pressLeftButton={pressLeftButton}
        />
      ) : (
        <NewsScreen
          pressLeftButton={pressLeftButton}
          pressRightButton={pressRightButton}
          isRightButtonPressed={isRightButtonPressed}
          isLeftButtonPressed={isLeftButtonPressed}
        />
      )}
    </View>
  );
};

export default CommunityContainer;
