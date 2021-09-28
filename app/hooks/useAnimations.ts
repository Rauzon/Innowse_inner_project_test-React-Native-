import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import Value = Animated.Value;
import setAnimation from '../helpers/setAnimation';

export type ValuesType = {
  start: number;
  end: number;
  duration: number;
};

interface IAnimationsProps {
  fadeValues: ValuesType;
  transformsValues: ValuesType;
  isOpened: boolean;
}
type ResultProps = {
  dropAnim: Value;
  fadeAnim: Value;
};

const useAnimations = (props: IAnimationsProps): ResultProps => {
  const {transformsValues, fadeValues, isOpened} = props;
  const dropAnim = useRef(
    new Animated.Value(
      isOpened ? transformsValues.start : transformsValues.end,
    ),
  ).current;
  const fadeAnim = useRef(
    new Animated.Value(isOpened ? fadeValues.start : fadeValues.end),
  ).current;

  useEffect(() => {
    setAnimation({
      anim: fadeAnim,
      modalIsOpened: isOpened,
      values: fadeValues,
    });
    setAnimation({
      anim: dropAnim,
      modalIsOpened: isOpened,
      values: transformsValues,
    });
    //eslint-disable-next-line
  }, [dropAnim, fadeAnim, isOpened]);

  return {
    dropAnim,
    fadeAnim,
  };
};

export default useAnimations;
