import React, {memo} from 'react';
import {ScrollView, ViewStyle} from 'react-native';
import CustomAppHeader from '../../../components/customAppHeader/CustomAppHeader';
import Referrals from './referralsScreen/Referrals';

interface IReferral {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const ReferralScreen = memo(
  ({
    isLeftButtonPressed,
    isRightButtonPressed,
    pressLeftButton,
    pressRightButton,
  }: IReferral): JSX.Element => {
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
        <Referrals />
      </ScrollView>
    );
  },
);

export default ReferralScreen;
