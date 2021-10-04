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

    return metaData ? (
      <TouchableOpacity
        style={
          !isLastItem
            ? [container, {marginRight: 8}]
            : [container, {paddingRight: 16}]
        }
        onPress={() => onVideoPress(videoId)}>
        <View
          style={
            !isFirstItem ? poster_wrapper : [poster_wrapper, {paddingLeft: 16}]
          }>
          <Image
            style={poster_playIcon}
            source={VIDEOS_ICON_URL_DATA[iconName]}
          />
          <Image source={{uri: metaData.thumbnail_url}} style={poster} />
        </View>
        <View
          style={
            isLastItem
              ? [content_wrapper, {right: 16}]
              : isFirstItem
              ? [content_wrapper, {left: 16}]
              : content_wrapper
          }>
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
