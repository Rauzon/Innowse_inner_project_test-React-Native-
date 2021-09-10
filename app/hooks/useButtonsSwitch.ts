import {useCallback, useState} from 'react';
import getCurrentStyles from '../helpers/getCurrentStyles';

type UseButtonSwitchType = {
  isRightButtonPressed?: boolean;
  isLeftButtonPressed?: boolean;
  pressRightButton?: (pressed: boolean) => any[];
  pressLeftButton?: (pressed: boolean) => any[];
};

const useButtonsSwitch = (initialState: boolean = true): UseButtonSwitchType => {
  const [isLeftButtonPressed, setIsLeftButtonPressed] =
    useState<boolean>(initialState);
  const [isRightButtonPressed, setIsRightButtonPressed] = useState<boolean>(
    !initialState,
  );

  const pressRightButton = useCallback(
    (pressed: boolean): any[] => {
      if (pressed) {
        setIsLeftButtonPressed(false);
        setIsRightButtonPressed(true);
      }
      return getCurrentStyles(isRightButtonPressed);
    },
    [isRightButtonPressed],
  );

  const pressLeftButton = useCallback(
    (pressed: boolean): any[] => {
      if (pressed) {
        setIsLeftButtonPressed(true);
        setIsRightButtonPressed(false);
      }
      return getCurrentStyles(isLeftButtonPressed);
    },
    [isLeftButtonPressed],
  );
  return {
    isRightButtonPressed,
    isLeftButtonPressed,
    pressRightButton,
    pressLeftButton,
  };
};

export default useButtonsSwitch;
