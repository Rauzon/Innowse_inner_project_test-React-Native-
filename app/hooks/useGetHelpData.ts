import {useEffect, useState} from 'react';
import helpService from '../services/help/help.service';
import {IHelpState} from '../services/help/help.types';

const useGetHelpData = (): IHelpState | null => {
  const [helpData, setHelpData] = useState<IHelpState | null>(null);

  useEffect(() => {
    const data = helpService.getState();
    if (data) {
      setHelpData(data);
    }
  }, []);

  return helpData;
};

export default useGetHelpData;
