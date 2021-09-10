import {IUserState} from '../users/user.types';
import {BehaviorSubject} from 'rxjs';

class VideoStreamService {
  public videoState$: BehaviorSubject<IUserState> =
    new BehaviorSubject<IUserState>({});
  public constructor() {
    if (VideoStreamService.exists) {
      return VideoStreamService.instance;
    }
    VideoStreamService.instance = this;
    VideoStreamService.exists = true;
  }
}

const videoStreamInstance = new VideoStreamService();

export default videoStreamInstance;
