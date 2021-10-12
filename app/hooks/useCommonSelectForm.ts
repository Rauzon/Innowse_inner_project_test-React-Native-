import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

type DataType = {label: string; value: string}[];

type CommonSelectFormType<T> = {
  selectedData: T | undefined;
  dependencies: Array<unknown>;
  setStateData(data: DataType): void;
  isShouldTranslate: boolean;
};

const useCommonSelectForm = <T>({
  selectedData,
  dependencies,
  setStateData,
  isShouldTranslate,
}: CommonSelectFormType<T>) => {
  const {t} = useTranslation();

  useEffect(() => {
    if (selectedData) {
      const data = Object.keys(selectedData!).map(item => {
        const conditionValue = isShouldTranslate
          ? t(`foodMessageScreen.${item}`)
          : item.toString();
        return {
          label: conditionValue,
          value: item,
        };
      });
      setStateData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, selectedData, setStateData]);
};

export default useCommonSelectForm;
