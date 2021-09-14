import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import CustomAppHeader from '../commonComponents/customAppHeader/CustomAppHeader';
import FaqComponentScreen from './faq/FaqComponent.screen';
import SupportScreen from './support/Support.screen';

const BenefitsContainer = memo((): JSX.Element => {
  const {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  } = useButtonsSwitch();

  return (
    <ScrollView>
      <CustomAppHeader
        rightBtnContent={'Служба Поддержки'}
        leftBtnContent={'FAQ'}
        isLeftButtonPressed={isLeftButtonPressed}
        isRightButtonPressed={isRightButtonPressed}
        pressRightButton={pressRightButton}
        pressLeftButton={pressLeftButton}
      />
      {isLeftButtonPressed ? <FaqComponentScreen /> : <SupportScreen />}
    </ScrollView>
  );
});

export default BenefitsContainer;
