import {BehaviorSubject} from 'rxjs';
import {IHelpState} from './help.types';
import {faqCardsData} from './data';

class HelpService {
  private helpState$: BehaviorSubject<IHelpState> =
    new BehaviorSubject<IHelpState>({
      faq: {
        faqData: faqCardsData,
      },
    });
  constructor() {
    if (HelpService.exists) {
      return HelpService.instance;
    }
    HelpService.instance = this;
    HelpService.exists = true;
  }
  getState = () => {
    return this.helpState$.getValue();
  };
}

const helpService = new HelpService();

export default helpService;
