import React, {memo} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ViewStyle,
} from 'react-native';
import style from '../VideoItem/videoItem.styles';
import VideoItem from '../VideoItem/VideoItem';

interface IListHeader {
  dataSeries: string[];
  styles: ViewStyle | ViewStyle[] | typeof style;
  onVideoPress(videoId: string): void;
}

const ListHeader = memo(
  ({dataSeries, styles, onVideoPress}: IListHeader): JSX.Element => {
    const renderItem = ({item, index}: ListRenderItemInfo<string>) => (
      <VideoItem
        key={index}
        videoId={item}
        onVideoPress={onVideoPress}
        //@ts-ignore
        styles={styles}
        isLastItem={index === dataSeries.length - 1}
        isFirstItem={index === 0}
        iconName={'play_huge_icon'}
      />
    );

    return (
      <SafeAreaView style={style.list_wrapper}>
        <FlatList
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={dataSeries}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  },
);

export default ListHeader;
