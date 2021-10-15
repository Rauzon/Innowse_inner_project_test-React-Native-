import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CustomPicker from '../../../components/CustomPicker/CustomPicker';
import styles from './foodMessage.styles';
import {useTranslation} from 'react-i18next';
import {
  CitiesType,
  OfficesType,
} from '../../../services/additionalContent/additionalContent.types';
import ConfirmButton from '../../../components/ConfirmButton/ConfirmButton';
import {FORM_FIELD_NAMES} from '../../../constants';
import useSelectFormData from '../../../hooks/useSelectFormData';

export type FoodMessageFormDataType = {
  city: CitiesType;
  office: OfficesType;
  floor: number;
  cabinetNumber: number;
};

const FoodMessageScreen = (): JSX.Element => {
  const {CITY, OFFICE, ROOM, FLOOR} = FORM_FIELD_NAMES;

  const {t} = useTranslation();
  const [isButtonDisabled, setDisableButton] = useState<boolean>(false);
  const [shouldBeRested, setShouldBeRested] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    floors,
    reset,
    rooms,
    offices,
    cities,
    setError,
    watcher,
  } = useSelectFormData();

  const onSubmit = async (data: FoodMessageFormDataType): Promise<void> => {
    //submit to state
    console.log(data);
    await reset();
    setShouldBeRested(true);
  };

  useEffect(() => {
    const formValues = Object.values(watcher);
    const isComplitedForm = formValues.reduce((acc, item) => {
      return !item;
    }, false);
    setDisableButton(isComplitedForm);
  }, [watcher]);

  const conditionButtonStyle = isButtonDisabled
    ? [styles.button, styles.button_disabled]
    : styles.button;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('foodMessageScreen.foodMessage')}</Text>
      <CustomPicker
        fieldFormName={CITY}
        addedLabel={t('foodMessageScreen.choose')}
        setError={setError}
        control={control}
        label={t('foodMessageScreen.cityLabel')}
        data={cities}
        isCleaned={shouldBeRested}
        setShouldBeRested={setShouldBeRested}
      />
      <CustomPicker
        fieldFormName={OFFICE}
        isDisabled={!watcher.city}
        addedLabel={t('foodMessageScreen.choose')}
        setError={setError}
        control={control}
        label={t('foodMessageScreen.officeLabel')}
        data={offices}
        isCleaned={shouldBeRested}
        setShouldBeRested={setShouldBeRested}
      />
      <CustomPicker
        fieldFormName={FLOOR}
        isDisabled={!watcher.office?.length}
        setError={setError}
        control={control}
        label={t('foodMessageScreen.floorLabel')}
        data={floors}
        isCleaned={shouldBeRested}
        setShouldBeRested={setShouldBeRested}
      />
      <CustomPicker
        fieldFormName={ROOM}
        isDisabled={!watcher.floor?.toString().length || !watcher.floor}
        setError={setError}
        control={control}
        label={t('foodMessageScreen.roomLabel')}
        data={rooms}
        isCleaned={shouldBeRested}
        setShouldBeRested={setShouldBeRested}
      />
      <ConfirmButton
        style={conditionButtonStyle}
        onPress={handleSubmit(onSubmit)}
        disabled={isButtonDisabled}>
        <Text style={styles.button_content}>
          {t('foodMessageScreen.sendNotification')}
        </Text>
      </ConfirmButton>
    </View>
  );
};

export default FoodMessageScreen;
