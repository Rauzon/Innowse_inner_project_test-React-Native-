import React, {memo, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import s from '../videoItem/videoItem.styles';
import listHeaderStyles from './listHeader.styles';
import VideoItem from '../videoItem/VideoItem';

interface IListHeaderProps {
  dataSeries: string[];
  styles: typeof s;
  onVideoPress(videoId: string): void;
}

const ListHeader = memo(
  ({dataSeries, styles, onVideoPress}: IListHeaderProps): JSX.Element => {
    const {} = styles;
    return (
      <SafeAreaView style={{marginBottom: 16}}>
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
