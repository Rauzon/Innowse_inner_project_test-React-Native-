import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useGetMetaData from '../../../../hooks/useGetMetaData';
import style from './videoItem.styles';
import {VIDEOS_ICON_URL_DATA} from '../../../../constants';

interface IVideoItem {
  videoId: string;
  onVideoPress(videoId: string): void;
  styles: typeof style;
  isLastItem?: boolean;
  isFirstItem?: boolean;
  iconName: string;
}

const VideoItem = memo(
  ({
    videoId,
    onVideoPress,
    styles,
    isLastItem,
    iconName,
    isFirstItem,
  }: IVideoItem): JSX.Element => {
    const metaData = useGetMetaData(videoId);

    const {
      date,
      wrapper_date,
      wrapper_title,
      title,
      content_wrapper,
      poster_wrapper,
      poster,
      poster_playIcon,
      container,
    } = styles;

    const conditionTouchableStyle = !isLastItem
      ? [container, style.margin_right_gap]
      : [container, style.padding_right_gap];

    const conditionViewStyle = !isFirstItem
      ? poster_wrapper
      : [poster_wrapper, style.padding_left_gap];

    const conditionStyleContentView = isLastItem
      ? [content_wrapper, style.right_gap]
      : isFirstItem
      ? [content_wrapper, style.left_gap]
      : content_wrapper;

    const onBtnPress = () => onVideoPress(videoId);

    return metaData ? (
      <TouchableOpacity style={conditionTouchableStyle} onPress={onBtnPress}>
        <View style={conditionViewStyle}>
          <Image
            style={poster_playIcon}
            source={VIDEOS_ICON_URL_DATA[iconName]}
          />
          <Image source={{uri: metaData.thumbnail_url}} style={poster} />
        </View>
        <View style={conditionStyleContentView}>
          <View style={wrapper_title}>
            <Text style={title}>{metaData.title}</Text>
          </View>
          <View style={wrapper_date}>
            <Text style={date}>24.04.2021</Text>
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      <></>
    );
  },
);

export default VideoItem;
