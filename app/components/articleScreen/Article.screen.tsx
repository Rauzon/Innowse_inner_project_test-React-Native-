import React, {useCallback, useState} from 'react';
import {FlatList, Modal, View} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import useGetMetaData from '../../hooks/useGetMetaData';
import SubstanceList from '../substanceList/SubstanceList';
import VideoModal from '../videoModal/VideoModal';
import {ROUTES} from '../../constants';
import {FaqType} from '../../services/help/help.types';
import ArticleHeader from '../articleHeader/ArticleHeader';
import ContentItem from '../contentItem/ContentItem';

const ArticleScreen = (): JSX.Element => {
  const {params} = useRoute<Route<ROUTES.FAQ, FaqType>>();
  const {title, precontent, content, headers, videoId} = params;
  const metaData = useGetMetaData(videoId);
  const [modalVisible, setVisibleModal] = useState<boolean>(false);
  const posterUrl = metaData?.thumbnail_url;

  const onSetOpenModal = useCallback((isOpened: boolean) => {
    setVisibleModal(isOpened);
  }, []);

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <ArticleHeader
              title={title}
              onSetOpenVideoNodal={onSetOpenModal}
              posterUrl={posterUrl}
              precontent={precontent}
            />
            <SubstanceList headers={headers} />
          </>
        )}
        data={content}
        renderItem={({item, index}) => (
          <ContentItem
            isFirstItem={index === 0}
            key={index}
            subtitle={item.subtitle}
            text={item.text}
          />
        )}
      />
      <Modal visible={modalVisible} transparent={true}>
        <VideoModal videoId={videoId} onClose={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
};

export default ArticleScreen;
