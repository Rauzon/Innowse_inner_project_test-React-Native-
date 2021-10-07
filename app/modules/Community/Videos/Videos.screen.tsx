import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';
import VideoList from './VideoList/VideoList';

interface IVideos {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const VideosScreen = memo(
  ({
    pressLeftButton,
    pressRightButton,
    isLeftButtonPressed,
    isRightButtonPressed,
  }: IVideos): JSX.Element => {
    return (
      <View>
        <VideoList
          isLeftButtonPressed={isLeftButtonPressed}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          pressLeftButton={pressLeftButton}
        />
      </View>
    );
  },
);

export default VideosScreen;
