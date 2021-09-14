import React, {memo} from 'react';
import {ScrollView, View} from 'react-native';
import VideoList from './videoList/VideoList';
import s from './Videos.styles';

interface IVideosProps {}

const VideosScreen = memo(({}: IVideosProps): JSX.Element => {
  return (
    <View style={s.container}>
      <VideoList />
    </View>
  );
});

export default VideosScreen;
