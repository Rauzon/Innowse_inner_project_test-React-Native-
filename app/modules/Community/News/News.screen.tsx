import React, {memo, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';
import newsService from '../../../services/news/news.service';
import {NewType} from '../../../services/news/news.types';
import NewComponent from './NewComponent/NewComponent';
import CustomAppHeader from '../../../components/CustomAppHeader/CustomAppHeader';
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
    const [newsData, setNewsData] = useState<NewType[]>([]);

    useEffect(() => {
      const contentData = newsService.getNews();
      if (contentData) {
        setNewsData(contentData);
      }
    }, []);

    const header = () => (
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
    );

    const renderItem = ({item, index}: ListRenderItemInfo<NewType>) => (
      <NewComponent isFirstItem={index === 0} newItem={item} key={item.id} />
    );

    return (
      <FlatList
        ListHeaderComponent={header}
        data={newsData}
        renderItem={renderItem}
      />
    );
  },
);

export default NewsScreen;
