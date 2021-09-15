import {useEffect, useState} from 'react';
import {YoutubeMeta} from 'react-native-youtube-iframe';
import videoStreamService from '../services/videoStreamService/videoStream.service';

const useGetMetaData = (videoId: string): YoutubeMeta | null => {
  const [metaData, setMetaData] = useState<{[key: string]: YoutubeMeta} | null>(
    null,
  );

  useEffect(() => {
    const getData = async () => {
      await videoStreamService.getMetaData(videoId);
      const data = videoStreamService.videoState$.getValue();
      if (data.metaData) {
        setMetaData(data.metaData);
      }
    };
    getData();
  }, [videoId]);

  return metaData ? metaData[videoId] : null;
};

export default useGetMetaData;
