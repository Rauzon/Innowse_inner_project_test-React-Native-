import {IHelpState} from './help.types';
import {faqCardsData} from './data';
//@ts-ignore
import {BehaviorSubject} from 'rxjs';

class HelpService {
  private static instance: HelpService;

  public static getInstance = () => {
    if (!HelpService.instance) {
      HelpService.instance = new HelpService();
    }
    return HelpService.instance;
  };

  private helpState$ = new BehaviorSubject<IHelpState>({
    faq: {
      faqData: faqCardsData,
    },
  } as IHelpState);

  getState = () => {
    return this.helpState$.getValue();
  };
}

const helpService = HelpService.getInstance();

export default helpService;
