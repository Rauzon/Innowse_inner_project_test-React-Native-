import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import CustomAppHeader from '../commonComponents/customAppHeader/CustomAppHeader';
import useButtonsSwitch from '../../hooks/useButtonsSwitch';
import VideosScreen from './videos/Videos.screen';
import NewsScreen from './news/News.screen';

interface ICommunityContainerProps {}

const CommunityContainer = memo(({}: ICommunityContainerProps): JSX.Element => {
  const {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  } = useButtonsSwitch();

  return (
    <ScrollView>
      <CustomAppHeader
        rightBtnContent={'Новости'}
        leftBtnContent={'Видео'}
        isLeftButtonPressed={isLeftButtonPressed}
        isRightButtonPressed={isRightButtonPressed}
        pressRightButton={pressRightButton}
        pressLeftButton={pressLeftButton}
      />
      {isLeftButtonPressed ? <VideosScreen /> : <NewsScreen />}
    </ScrollView>
  );
});

export default CommunityContainer;
