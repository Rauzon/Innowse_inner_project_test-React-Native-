import React, {memo, useEffect, useState} from 'react';
import {FlatList, ViewStyle} from 'react-native';
import newsService from '../../../services/news/news.service';
import {NewType} from '../../../services/news/news.types';
import NewComponent from './newComponent/NewComponent';
import CustomAppHeader from '../../../components/customAppHeader/CustomAppHeader';
import {useTranslation} from 'react-i18next';

interface INews {
  isRightButtonPressed: boolean;
  isLeftButtonPressed: boolean;
  pressRightButton: (pressed: boolean) => ViewStyle[];
  pressLeftButton: (pressed: boolean) => ViewStyle[];
}

const NewsScreen = memo(
  ({
    pressRightButton,
    pressLeftButton,
    isRightButtonPressed,
    isLeftButtonPressed,
  }: INews): JSX.Element => {
    const {t} = useTranslation();
    const [newsData, setNewsData] = useState([] as NewType[]);

    useEffect(() => {
      const contentData = newsService.getNews();
      if (contentData) {
        setNewsData(contentData);
      }
    }, []);

    return (
      <FlatList
        ListHeaderComponent={() => (
          <>
            <CustomAppHeader
              rightBtnContent={t('TabsAndButtonsHeaders.news')}
              leftBtnContent={t('TabsAndButtonsHeaders.video')}
              isLeftButtonPressed={isLeftButtonPressed}
              isRightButtonPressed={isRightButtonPressed}
              pressRightButton={pressRightButton}
              pressLeftButton={pressLeftButton}
            />
          </>
        )}
        data={newsData}
        renderItem={({item, index}) => (
          <NewComponent isFirstItem={index === 0} newItem={item} />
        )}
      />
    );
  },
);

export default NewsScreen;
