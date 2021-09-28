import React, {memo} from 'react';
import {Pressable, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from './videoModal.styles';

interface IVideoModalProps {
  videoId: string;
  onClose(): void;
}

const VideoModal = memo(({videoId, onClose}: IVideoModalProps): JSX.Element => {
  return (
    <View style={styles.modal_wrapper}>
      <Pressable onPress={onClose} style={styles.close_btn}>
        <View style={styles.close_line} />
        <View style={[styles.close_line, {transform: [{rotate: '-45deg'}]}]} />
      </Pressable>
      <YoutubeIframe play={true} videoId={videoId} height={311} />
    </View>
  );
});

export default VideoModal;
