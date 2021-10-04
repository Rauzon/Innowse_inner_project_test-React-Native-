import React from 'react';
import {View} from 'react-native';
import styles from './article.styles';
import {ROUTES} from '../../../../constants';
import ContentList from '../../../../components/contentList/ContentList';
import {Route, useRoute} from '@react-navigation/native';
import {NewType} from '../../../../services/news/news.types';

const ArticleScreen = (): JSX.Element => {
  const {params} = useRoute<Route<ROUTES.NEWS, NewType>>();

  return (
    <View style={styles.container}>
      <ContentList newContent={params} />
    </View>
  );
};

export default ArticleScreen;
