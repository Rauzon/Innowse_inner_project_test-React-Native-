import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItemInfo, Modal, View} from 'react-native';
import {Route, useRoute} from '@react-navigation/native';
import useGetMetaData from '../../hooks/useGetMetaData';
import SubstanceList from '../SubstanceList/SubstanceList';
import VideoModal from '../VideoModal/VideoModal';
import {ROUTES} from '../../constants';
import {FaqType, HelpContentType} from '../../services/help/help.types';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ContentItem from '../ContentItem/ContentItem';

const ArticleScreen = (): JSX.Element => {
  const {params} = useRoute<Route<ROUTES.FAQ, FaqType>>();
  const {title, precontent, content, headers, videoId} = params;
  const metaData = useGetMetaData(videoId);
  const [modalVisible, setVisibleModal] = useState<boolean>(false);
  const posterUrl = metaData?.thumbnail_url;

  const onSetOpenModal = useCallback((isOpened: boolean) => {
    setVisibleModal(isOpened);
  }, []);
  const setVisibleModalHandler = () => setVisibleModal(false);

  const header = () => (
    <>
      <ArticleHeader
        title={title}
        onSetOpenVideoModal={onSetOpenModal}
        posterUrl={posterUrl}
        precontent={precontent}
      />
      <SubstanceList headers={headers} />
    </>
  );

  const renderItem = ({item, index}: ListRenderItemInfo<HelpContentType>) => (
    <ContentItem
      isFirstItem={index === 0}
      key={item.id}
      subtitle={item.subtitle}
      text={item.text}
    />
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={header}
        data={content}
        renderItem={renderItem}
      />
      <Modal visible={modalVisible} transparent={true}>
        <VideoModal videoId={videoId} onClose={setVisibleModalHandler} />
      </Modal>
    </View>
  );
};

export default ArticleScreen;
