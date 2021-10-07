import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

type TranslateItemsType = {
  data: string[];
  prefix: string;
  keyPrefix?: string;
  ns?: string;
};

const useTranslateItems = (values: TranslateItemsType) => {
  const {data, prefix, keyPrefix, ns} = values;
  const {t} = useTranslation(ns, {keyPrefix});
  const [translatedCities, setCitesData] = useState<string[]>([]);

  useEffect(() => {
    const citiesData = data.map(item => {
      return t(`${prefix}.${item}`);
    });
    setCitesData(citiesData);
  }, [data, t, prefix]);

  return translatedCities;
};

export default useTranslateItems;
