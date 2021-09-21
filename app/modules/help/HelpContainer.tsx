import React, {memo} from 'react';
import {View} from 'react-native';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import FaqScreen from './faq/Faq.screen';
import SupportScreen from './support/Support.screen';

const BenefitsContainer = memo((): JSX.Element => {
  const {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  } = useButtonsSwitch();
  return (
    <View>
      {isLeftButtonPressed ? (
        <FaqScreen
          pressLeftButton={pressLeftButton}
          pressRightButton={pressRightButton}
          isRightButtonPressed={isRightButtonPressed}
          isLeftButtonPressed={isLeftButtonPressed}
        />
      ) : (
        <SupportScreen
          isLeftButtonPressed={isLeftButtonPressed}
          isRightButtonPressed={isRightButtonPressed}
          pressRightButton={pressRightButton}
          pressLeftButton={pressLeftButton}
        />
      )}
    </View>
  );
});

export default BenefitsContainer;
