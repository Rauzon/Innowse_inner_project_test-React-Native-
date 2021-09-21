import React, {memo} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from '../videoItem/videoItem.styles';
import VideoItem from '../videoItem/VideoItem';

interface IListHeaderProps {
  dataSeries: string[];
  styles: typeof styles;
  onVideoPress(videoId: string): void;
}

const ListHeader = memo(
  ({dataSeries, styles, onVideoPress}: IListHeaderProps): JSX.Element => {
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
