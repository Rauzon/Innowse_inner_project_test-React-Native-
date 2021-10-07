import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Modal,
  ViewStyle,
  ListRenderItemInfo,
} from 'react-native';
import videoStreamService from '../../../../services/videoStreamService/videoStream.service';
import VideoItem from '../VideoItem/VideoItem';
import VideoModal from '../../../../components/VideoModal/VideoModal';
import ListHeader from '../ListHeader/ListHeader';
import videoListStyle from '../VideoItem/videoItem.styles';
import videoCarouselStyle from '../ListHeader/listHeader.styles';
import CustomAppHeader from '../../../../components/CustomAppHeader/CustomAppHeader';
import {useTranslation} from 'react-i18next';

interface IVideoList {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const VideoList = memo(
  ({
    pressRightButton,
    pressLeftButton,
    isRightButtonPressed,
    isLeftButtonPressed,
  }: IVideoList): JSX.Element => {
    const {t} = useTranslation();
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

    const header = () => (
      <>
        <CustomAppHeader
          rightBtnContent={t('TabsAndButtonsHeaders.news')}
          leftBtnContent={t('TabsAndButtonsHeaders.video')}
          isLeftButtonPressed={isLeftButtonPressed}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          pressLeftButton={pressLeftButton}
        />
        <ListHeader
          dataSeries={dataSeries}
          //@ts-ignore
          styles={videoCarouselStyle}
          onVideoPress={onVideoPress}
        />
      </>
    );

    const renderItem = ({item}: ListRenderItemInfo<string>) => (
      <VideoItem
        videoId={item}
        onVideoPress={onVideoPress}
        styles={videoListStyle}
        iconName={'play_small_icon'}
      />
    );

    return (
      <View>
        <FlatList
          data={dataSeries}
          ListHeaderComponent={header}
          renderItem={renderItem}
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
