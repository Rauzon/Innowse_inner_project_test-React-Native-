import {useEffect, useState} from 'react';
import {getYoutubeMeta, YoutubeMeta} from 'react-native-youtube-iframe';

const useGetMetaData = (videoId: string) => {
  const [metaData, setMetaData] = useState<YoutubeMeta | null>(null);

  useEffect(() => {
    getYoutubeMeta(videoId).then(data => {
      setMetaData(data);
    });
  }, [videoId]);

  return metaData;
};

export default useGetMetaData;
