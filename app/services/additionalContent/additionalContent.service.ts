//@ts-ignore
import {BehaviorSubject} from 'rxjs';
import {IAdditionalContentState} from './additionalContent.types';
import {
  CITIES,
  COMPANY_OFFICES_MINSK,
  COMPANY_OFFICES_VITEBSK,
} from '../../constants';

class AdditionalContentService {
  private static interface: AdditionalContentService;

  private addContentState$ = new BehaviorSubject<IAdditionalContentState>({
    actionsData: {
      foodMessage: {
        [CITIES.MINSK]: {
          [COMPANY_OFFICES_MINSK.ZHUKOVA]: {
            9: [1, 2, 15],
            13: [1, 33, 15],
            14: [1, 12, 15],
          },
          [COMPANY_OFFICES_MINSK.SMOLYACHKOVA]: {
            1: [12, 25, 3],
            2: [31, 12, 43],
            3: [2, 42, 33],
          },
        },
        [CITIES.VITEBSK]: {
          [COMPANY_OFFICES_VITEBSK.SUVOROVA]: {
            1: [12, 25, 3],
            2: [31, 12, 43],
            3: [2, 42, 33],
          },
          [COMPANY_OFFICES_VITEBSK.POBEDITELEU]: {
            1: [12, 25, 3],
            2: [31, 12, 43],
            3: [2, 42, 33],
          },
        },
      },
    },
    information: {},
  } as IAdditionalContentState);

  public static getInstance = (): AdditionalContentService => {
    if (!AdditionalContentService.interface) {
      AdditionalContentService.interface = new AdditionalContentService();
    }
    return AdditionalContentService.interface;
  };

  public getState = (): IAdditionalContentState => {
    return this.addContentState$.getValue();
  };
  public subscribe = <T>(callback: T): void => {
    this.addContentState$.subscribe(callback);
  };
}

const additionalContentService = AdditionalContentService.getInstance();

export default additionalContentService;
