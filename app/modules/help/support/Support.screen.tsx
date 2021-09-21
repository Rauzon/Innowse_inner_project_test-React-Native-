import React, {memo} from 'react';
import {View, ViewStyle, Text} from 'react-native';
import CustomAppHeader from '../../../components/customAppHeader/CustomAppHeader';

interface ISupportScreenProps {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const SupportScreen = memo(
  ({
    pressLeftButton,
    pressRightButton,
    isLeftButtonPressed,
    isRightButtonPressed,
  }: ISupportScreenProps): JSX.Element => {
    return (
      <View>
        <CustomAppHeader
          rightBtnContent={'Служба Поддержки'}
          leftBtnContent={'FAQ'}
          isLeftButtonPressed={isLeftButtonPressed}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          pressLeftButton={pressLeftButton}
        />
      </View>
    );
  },
);

export default SupportScreen;
