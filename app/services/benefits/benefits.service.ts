import {IBenefits} from './benefits.types';
import {MinskCouponsData, ReferralsData, VitebskCouponsData} from './data';
//@ts-ignore
import {BehaviorSubject} from 'rxjs';
import {BENEFITS_DISCOUNTS_CATEGORY} from '../../constants';

class BenefitsService {
  private static instance: BenefitsService;
  private benefitsState$ = new BehaviorSubject<IBenefits>({
    discounts: {
      discountsData: [
        {
          id: '1',
          icon: 'minsk_card',
          city: 'minsk',
          shortDescription: 'Domino’s Pizza, Rosegose и др.',
          coupons: MinskCouponsData,
        },
        {
          id: '2',
          icon: 'vitebsk_card',
          city: 'vitebsk',
          shortDescription: 'Лисица, Rose и др.',
          coupons: VitebskCouponsData,
        },
        {
          id: '3',
          icon: 'gomel_card',
          city: 'gomel',
          shortDescription: 'Еда В Гомеле и др.',
          coupons: VitebskCouponsData,
        },
        {
          id: '4',
          icon: 'mogilev_card',
          city: 'mogilev',
          shortDescription: 'Еда в Могилева и др.',
          coupons: VitebskCouponsData,
        },
      ],
      categories: [
        BENEFITS_DISCOUNTS_CATEGORY.ALL,
        BENEFITS_DISCOUNTS_CATEGORY.SPORT,
        BENEFITS_DISCOUNTS_CATEGORY.BEAUTY,
        BENEFITS_DISCOUNTS_CATEGORY.FOOD,
        BENEFITS_DISCOUNTS_CATEGORY.DRINK,
      ],
    },
    referrals: ReferralsData,
  } as IBenefits);

  public static getInstance = () => {
    if (!BenefitsService.instance) {
      BenefitsService.instance = new BenefitsService();
    }
    return BenefitsService.instance;
  };

  public getDiscountsState = (): IBenefits => {
    return this.benefitsState$.getValue();
  };
}

const benefitsService = BenefitsService.getInstance();

export default benefitsService;
