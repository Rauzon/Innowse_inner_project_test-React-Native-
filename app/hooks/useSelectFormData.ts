import {useEffect, useState} from 'react';
import additionalContentService from '../services/additionalContent/additionalContent.service';
import {
  FoodMessageCityDataType,
  FoodMessageType,
  OfficeDataType,
} from '../services/additionalContent/additionalContent.types';
import {ItemDataType} from '../components/CustomPicker/CustomPicker';
import {useTranslation} from 'react-i18next';
import {
  Control,
  useForm,
  UseFormHandleSubmit,
  UseFormReset,
  UseFormSetError,
} from 'react-hook-form';
import {FoodMessageFormDataType} from '../modules/AddContent/FoodMessageScreen/FoodMessage.screen';
import useCommonSelectForm from './useCommonSelectForm';

type selectFormDataType = {
  offices: ItemDataType[];
  floors: ItemDataType[];
  rooms: ItemDataType[];
  cities: ItemDataType[];
  control: Control<FoodMessageFormDataType>;
  handleSubmit: UseFormHandleSubmit<FoodMessageFormDataType>;
  setError: UseFormSetError<FoodMessageFormDataType>;
  reset: UseFormReset<FoodMessageFormDataType>;
  watcher: FoodMessageFormDataType;
};

const useSelectFormData = (): selectFormDataType => {
  const {t} = useTranslation();
  const [officesData, setOfficesData] = useState<FoodMessageType>({});
  const [offices, setOffices] = useState<ItemDataType[]>([]);
  const [floors, setFloors] = useState<ItemDataType[]>([]);
  const [rooms, setRooms] = useState<ItemDataType[]>([]);
  const [cities, setCities] = useState<ItemDataType[]>([]);
  const {control, handleSubmit, watch, setError, reset} =
    useForm<FoodMessageFormDataType>();
  const watcher = watch();

  useEffect(() => {
    const {
      actionsData: {foodMessage},
    } = additionalContentService.getState();
    const citiesData = Object.keys(foodMessage).map(city => ({
      label: t(`profileScreen.${city}`),
      value: city,
    }));
    setOfficesData(foodMessage);
    setCities(citiesData);
  }, [t]);

  useCommonSelectForm<FoodMessageCityDataType>({
    selectedData: officesData[watcher.city],
    dependencies: [officesData, watcher.city, t],
    isShouldTranslate: true,
    setStateData: setOffices,
  });

  useCommonSelectForm<OfficeDataType>({
    selectedData: officesData[watcher.city]?.[watcher.office],
    dependencies: [officesData, watcher.city, t, watcher.office],
    isShouldTranslate: false,
    setStateData: setFloors,
  });

  useEffect(() => {
    const selectedData =
      officesData[watcher.city]?.[watcher.office]?.[watcher.floor];
    if (selectedData) {
      const roomsData = selectedData.map(item => ({
        label: item.toString(),
        value: item,
      }));
      setRooms(roomsData);
    }
  }, [officesData, watcher.city, t, watcher.office, watcher.floor]);

  return {
    cities,
    offices,
    floors,
    rooms,
    control,
    handleSubmit,
    reset,
    setError,
    watcher,
  };
};

export default useSelectFormData;
