import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import CustomAppHeader from '../commonComponents/customAppHeader/CustomAppHeader';
import DiscountsScreen from './dicounts/Discounts.screen';
import ReferralScreen from './referals/Referral.screen';

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
        rightBtnContent={'Рефералка'}
        leftBtnContent={'Скидки'}
        isLeftButtonPressed={isLeftButtonPressed}
        isRightButtonPressed={isRightButtonPressed}
        pressRightButton={pressRightButton}
        pressLeftButton={pressLeftButton}
      />
      {isLeftButtonPressed ? <DiscountsScreen /> : <ReferralScreen />}
    </ScrollView>
  );
});

export default BenefitsContainer;
