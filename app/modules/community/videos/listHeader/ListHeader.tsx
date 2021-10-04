import React, {memo} from 'react';
import {SafeAreaView, ScrollView, ViewStyle} from 'react-native';
import style from '../videoItem/videoItem.styles';
import VideoItem from '../videoItem/VideoItem';

interface IListHeader {
  dataSeries: string[];
  styles: ViewStyle | ViewStyle[] | typeof style;
  onVideoPress(videoId: string): void;
}

const ListHeader = memo(
  ({dataSeries, styles, onVideoPress}: IListHeader): JSX.Element => {
    return (
      <SafeAreaView style={style.list_wrapper}>
        <ScrollView
          horizontal={true}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}>
          {dataSeries.map((item, index, array) => {
            return (
              <VideoItem
                key={index}
                videoId={item}
                onVideoPress={onVideoPress}
                //@ts-ignore
                styles={styles}
                isLastItem={index === array.length - 1}
                isFirstItem={index === 0}
                iconName={'play_huge_icon'}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  },
);

export default ListHeader;
