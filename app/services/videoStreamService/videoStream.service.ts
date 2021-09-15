import {BehaviorSubject} from 'rxjs';
import {IVideoStream} from './videoStrime.types';
import {getYoutubeMeta} from 'react-native-youtube-iframe';

class VideoStreamService {
  private videoState$: BehaviorSubject<IVideoStream> =
    new BehaviorSubject<IVideoStream>({
      videoSeries: [
        '_hmWPKP2IjI',
        'ncT1p-0vMYs',
        'xa2zP2uVznA',
        'Gb0TQ7VeApY',
        '6ASD8gHrDeE',
      ],
      metaData: {},
    });
  public constructor() {
    if (VideoStreamService.exists) {
      return VideoStreamService.instance;
    }
    VideoStreamService.instance = this;
    VideoStreamService.exists = true;
  }
  public setMetaData(videoId: string): Promise<void> {
    return getYoutubeMeta(videoId).then(data => {
      const currentData = this.videoState$.getValue();
      const state$ = {
        ...currentData,
        metaData: {
          ...currentData.metaData,
          [videoId]: data,
        },
      };
      this.videoState$.next(state$);
    });
  }
  public getVideoState = (): IVideoStream => {
    return this.videoState$.getValue();
  };
}

const videoStreamService = new VideoStreamService();

export default videoStreamService;
