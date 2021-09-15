import {YoutubeMeta} from 'react-native-youtube-iframe';

export interface IVideoStream {
  videoSeries: string[];
  metaData: {[key: string]: YoutubeMeta};
}
