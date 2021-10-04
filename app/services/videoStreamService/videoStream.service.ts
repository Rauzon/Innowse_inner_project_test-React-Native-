import {IVideoStream} from './videoStrime.types';
import {getYoutubeMeta} from 'react-native-youtube-iframe';
//@ts-ignore
import {BehaviorSubject} from 'rxjs';

class VideoStreamService {
  private static instance: VideoStreamService;
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
    } as IVideoStream);

  public static getInstance = (): VideoStreamService => {
    if (!VideoStreamService.instance) {
      VideoStreamService.instance = new VideoStreamService();
    }
    return VideoStreamService.instance;
  };

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

const videoStreamService = VideoStreamService.getInstance();

export default videoStreamService;
