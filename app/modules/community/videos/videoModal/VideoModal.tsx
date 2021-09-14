import React, {memo, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import s from './videoModal.styles';

interface IVideoModalProps {
  videoId: string;
  onClose(): void;
}

const VideoModal = memo(({videoId, onClose}: IVideoModalProps): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return (
    <View style={s.modal_wrapper}>
      <Pressable onPress={onClose} style={s.close_btn}>
        <View style={s.close_line} />
        <View style={[s.close_line, {transform: [{rotate: '-45deg'}]}]} />
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
