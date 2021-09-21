import React from 'react';
import {View} from 'react-native';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import VideosScreen from './videos/Videos.screen';
import NewsScreen from './news/News.screen';

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
