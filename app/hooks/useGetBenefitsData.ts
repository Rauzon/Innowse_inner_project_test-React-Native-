import {useEffect, useState} from 'react';
import {IBenefits} from '../services/benefits/benefits.types';
import benefitsService from '../services/benefits/benefits.service';

const useGetBenefitsData = (): IBenefits | null => {
  const [data, setDiscountsData] = useState<IBenefits | null>(null);

  useEffect(() => {
    const data = benefitsService.getDiscountsState();
    if (data) {
      setDiscountsData(data);
    }
  }, []);

  return data;
};

export default useGetBenefitsData;
