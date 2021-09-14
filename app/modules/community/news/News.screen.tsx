import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import s from './news.styles';
import newsService from '../../../services/news/news.service';
import {NewType} from '../../../services/news/news.types';
import NewComponent from './newComponent/NewComponent';

interface INewsProps {}

const NewsScreen = memo(({}: INewsProps): JSX.Element => {
  const [newsData, setNewsData] = useState([] as NewType[]);

  useEffect(() => {
    const contentData = newsService.getNews();
    if (contentData) {
      setNewsData(contentData);
    }
  }, []);

  return (
    <FlatList
      style={s.container}
      data={newsData}
      renderItem={({item, index}) => (
        <NewComponent isFirstItem={index === 0} key={index} newItem={item} />
      )}
    />
  );
});

export default NewsScreen;
