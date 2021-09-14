import React, {memo} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import VideoList from './videoList/VideoList';
import s from './Videos.styles';

const VideosScreen = memo((): JSX.Element => {
  return (
    <View style={s.container}>
      <VideoList />
    </View>
  );
});

export default VideosScreen;
