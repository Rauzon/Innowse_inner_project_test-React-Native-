import {useEffect, useState} from 'react';
import {DiscountsType} from '../services/benefits/benefits.types';
import benefitsService from '../services/benefits/benefits.service';

const useGetBenefitsData = (): DiscountsType | null => {
  const [data, setDiscountsData] = useState<DiscountsType | null>(null);

  useEffect(() => {
    const {discounts} = benefitsService.getDiscountsState();
    if (discounts) {
      setDiscountsData(discounts);
    }
  }, []);

  return data;
};

export default useGetBenefitsData;
