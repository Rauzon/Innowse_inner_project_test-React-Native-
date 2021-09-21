import {BehaviorSubject} from 'rxjs';
import {IBenefits} from './benefits.types';
import {MinskCouponsData, ReferralsData, VitebskCouponsData} from './data';

class BenefitsService {
  private benefitsState$: BehaviorSubject<IBenefits> =
    new BehaviorSubject<IBenefits>({
      discounts: {
        discountsData: [
          {
            id: '1',
            icon: 'minsk_card',
            city: 'Минск',
            shortDescription: 'Domino’s Pizza, Rosegose и др.',
            coupons: MinskCouponsData,
          },
          {
            id: '2',
            icon: 'vitebsk_card',
            city: 'Витебск',
            shortDescription: 'Лисица, Rose и др.',
            coupons: VitebskCouponsData,
          },
          {
            id: '3',
            icon: 'gomel_card',
            city: 'Гомель',
            shortDescription: 'Еда В Гомеле и др.',
            coupons: VitebskCouponsData,
          },
          {
            id: '4',
            icon: 'mogilev_card',
            city: 'Могилев',
            shortDescription: 'Еда в Могилева и др.',
            coupons: VitebskCouponsData,
          },
        ],
        categories: ['Все', 'Спорт', 'Красота', 'Еда', 'Алкоголь'],
      },
      referrals: ReferralsData,
    });
  public constructor() {
    if (BenefitsService.exists) {
      return BenefitsService.instance;
    }
    BenefitsService.instance = this;
    BenefitsService.exists = true;
  }
  public getDiscountsState = (): IBenefits => {
    return this.benefitsState$.getValue();
  };
}

const benefitsService = new BenefitsService();

export default benefitsService;
