import React, {memo, useCallback, useEffect, useState} from 'react';
import {FlatList, View, Modal, ViewStyle} from 'react-native';
import videoStreamService from '../../../../services/videoStreamService/videoStream.service';
import VideoItem from '../videoItem/VideoItem';
import VideoModal from '../../../../components/videoModal/VideoModal';
import ListHeader from '../listHeader/ListHeader';
import videoListStyle from '../videoItem/videoItem.styles';
import videoCarouselStyle from '../listHeader/listHeader.styles';
import CustomAppHeader from '../../../../components/customAppHeader/CustomAppHeader';

interface IVideoListProps {
  isRightButtonPressed?: boolean;
  isLeftButtonPressed?: boolean;
  pressRightButton?: (pressed: boolean) => ViewStyle[];
  pressLeftButton?: (pressed: boolean) => ViewStyle[];
}

const VideoList = memo(
  ({
    pressRightButton,
    pressLeftButton,
    isRightButtonPressed,
    isLeftButtonPressed,
  }: IVideoListProps): JSX.Element => {
    const [dataSeries, setDataSeries] = useState<string[]>([]);
    const [modalVisible, showModal] = useState<boolean>(false);
    const [selectedVideo, setSelectedVideo] = useState<string>('');

    useEffect(() => {
      const {videoSeries} = videoStreamService.getVideoState();
      if (videoSeries) {
        setDataSeries(videoSeries);
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
            <>
              <CustomAppHeader
                rightBtnContent={'Новости'}
                leftBtnContent={'Видео'}
                isLeftButtonPressed={isLeftButtonPressed}
                isRightButtonPressed={isRightButtonPressed}
                pressRightButton={pressRightButton}
                pressLeftButton={pressLeftButton}
              />
              <ListHeader
                dataSeries={dataSeries}
                styles={videoCarouselStyle}
                onVideoPress={onVideoPress}
              />
            </>
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
  },
);

export default VideoList;
