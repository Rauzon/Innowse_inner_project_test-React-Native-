import {useEffect, useState} from 'react';
import {YoutubeMeta} from 'react-native-youtube-iframe';
import videoStreamService from '../services/videoStreamService/videoStream.service';

const useGetMetaData = (videoId: string): YoutubeMeta | null => {
  const [metaDataState, setMetaData] = useState<{
    [key: string]: YoutubeMeta;
  } | null>(null);

  useEffect(() => {
    const getData = async () => {
      await videoStreamService.setMetaData(videoId);
      const {metaData} = videoStreamService.getVideoState();
      if (metaData) {
        setMetaData(metaData);
      }
    };
    getData();
  }, [videoId]);

  return metaDataState ? metaDataState[videoId] : null;
};

export default useGetMetaData;
