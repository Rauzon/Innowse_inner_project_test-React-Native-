import {useEffect, useState} from 'react';
import {NewType} from '../services/news/news.types';
import newsService from '../services/news/news.service';

const useGetNews = (): NewType[] => {
  const [newsData, setNewsData] = useState<NewType[]>([]);

  useEffect(() => {
    const contentData = newsService.getNews();
    if (contentData) {
      setNewsData(contentData);
    }
  }, []);

  return newsData;
};

export default useGetNews;
