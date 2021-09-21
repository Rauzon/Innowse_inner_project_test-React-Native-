import React from 'react';
import {View} from 'react-native';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import DiscountsScreen from './dicounts/Discounts.screen';
import ReferralScreen from './referals/Referral.screen';

const BenefitsContainer = (): JSX.Element => {
  const {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  } = useButtonsSwitch();

  return (
    <View>
      {isLeftButtonPressed ? (
        <DiscountsScreen
          pressLeftButton={pressLeftButton}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          isLeftButtonPressed={isLeftButtonPressed}
        />
      ) : (
        <ReferralScreen
          isLeftButtonPressed={isLeftButtonPressed}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          pressLeftButton={pressLeftButton}
        />
      )}
    </View>
  );
};

export default BenefitsContainer;
