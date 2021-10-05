import React, {memo} from 'react';
import {View, ViewStyle} from 'react-native';
import CustomAppHeader from '../../../components/customAppHeader/CustomAppHeader';
import {useTranslation} from 'react-i18next';

interface ISupportScreen {
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
  }: ISupportScreen): JSX.Element => {
    const {t} = useTranslation();
    return (
      <View>
        <CustomAppHeader
          rightBtnContent={t('TabsAndButtonsHeaders.support')}
          leftBtnContent={t('TabsAndButtonsHeaders.faq')}
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
