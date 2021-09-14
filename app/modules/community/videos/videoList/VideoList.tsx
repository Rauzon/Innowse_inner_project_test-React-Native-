import React, {memo, useCallback, useEffect, useState} from 'react';
import {FlatList, View, Modal} from 'react-native';
import videoStreamService from '../../../../services/videoStreamService/videoStream.service';
import VideoItem from '../videoItem/VideoItem';
import VideoModal from '../videoModal/VideoModal';
import ListHeader from '../listHeader/ListHeader';
import videoListStyle from '../videoItem/videoItem.styles';
import videoCarouselStyle from '../listHeader/listHeader.styles';

interface IVideoListProps {}

const VideoList = memo(({}: IVideoListProps): JSX.Element => {
  const [dataSeries, setDataSeries] = useState<string[]>([]);
  const [modalVisible, showModal] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  useEffect(() => {
    const dataSeries = videoStreamService.videoState$.value.videoSeries;
    if (dataSeries) {
      setDataSeries(dataSeries);
    }
  }, []);

  const onVideoPress = useCallback((videoId: string) => {
    showModal(true);
    setSelectedVideo(videoId);
  }, []);

  const closeModal = useCallback(() => {
    showModal(false);
  }, []);

  return (
    <View>
      <FlatList
        data={dataSeries}
        ListHeaderComponent={() => (
          <ListHeader
            dataSeries={dataSeries}
            styles={videoCarouselStyle}
            onVideoPress={onVideoPress}
          />
        )}
        renderItem={({item}) => (
          <VideoItem
            videoId={item}
            onVideoPress={onVideoPress}
            styles={videoListStyle}
            iconName={'play_small_icon'}
          />
        )}
        keyExtractor={item => item}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}>
        <View>
          <VideoModal videoId={selectedVideo} onClose={closeModal} />
        </View>
      </Modal>
    </View>
  );
});

export default VideoList;
