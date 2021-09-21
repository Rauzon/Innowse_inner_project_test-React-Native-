import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';
import VideoList from './videoList/VideoList';
import styles from './Videos.styles';

interface IVideosProps {
  isRightButtonPressed?: boolean;
  isLeftButtonPressed?: boolean;
  pressRightButton?: (pressed: boolean) => ViewStyle[];
  pressLeftButton?: (pressed: boolean) => ViewStyle[];
}

const VideosScreen = memo(
  ({
    pressLeftButton,
    pressRightButton,
    isLeftButtonPressed,
    isRightButtonPressed,
  }: IVideosProps): JSX.Element => {
    return (
      <View style={styles.container}>
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
