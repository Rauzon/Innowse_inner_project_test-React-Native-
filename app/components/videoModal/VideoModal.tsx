import React, {memo, useState} from 'react';
import {Pressable, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from './videoModal.styles';

interface IVideoModalProps {
  videoId: string;
  onClose(): void;
}

const VideoModal = memo(({videoId, onClose}: IVideoModalProps): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return (
    <View style={styles.modal_wrapper}>
      <Pressable onPress={onClose} style={styles.close_btn}>
        <View style={styles.close_line} />
        <View style={[styles.close_line, {transform: [{rotate: '-45deg'}]}]} />
      </Pressable>
      <YoutubeIframe
        play={true}
        videoId={videoId}
        height={311}
        onChangeState={state => {
          if (state === 'ended') {
            setIsCompleted(true);
          }
        }}
      />
    </View>
  );
});

export default VideoModal;
