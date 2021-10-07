import React, {memo} from 'react';
import {Pressable, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from './videoModal.styles';

interface IVideoModal {
  videoId: string;
  onClose(): void;
}

const VideoModal = memo(({videoId, onClose}: IVideoModal): JSX.Element => {
  return (
    <View style={styles.modal_wrapper}>
      <Pressable onPress={onClose} style={styles.close_btn}>
        <View style={styles.close_line} />
        <View style={[styles.close_line, styles.close_line_rotated]} />
      </Pressable>
      <YoutubeIframe play={true} videoId={videoId} height={311} />
    </View>
  );
});

export default VideoModal;
