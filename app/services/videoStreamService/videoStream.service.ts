import {BehaviorSubject} from 'rxjs';
import {IVideoStream} from './videoStrime.types';

class VideoStreamService {
  public videoState$: BehaviorSubject<IVideoStream> =
    new BehaviorSubject<IVideoStream>({
      videoSeries: [
        '_hmWPKP2IjI',
        'ncT1p-0vMYs',
        'xa2zP2uVznA',
        'Gb0TQ7VeApY',
        '6ASD8gHrDeE',
      ],
    });
  public constructor() {
    if (VideoStreamService.exists) {
      return VideoStreamService.instance;
    }
    VideoStreamService.instance = this;
    VideoStreamService.exists = true;
  }
}

const videoStreamService = new VideoStreamService();

export default videoStreamService;
