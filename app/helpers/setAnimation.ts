import {Animated} from 'react-native';
import {ValuesType} from '../hooks/useAnimations';

type AnimationType = {
  anim: Animated.Value;
  modalIsOpened: boolean;
  values: ValuesType;
};

const setAnimation = ({anim, modalIsOpened, values}: AnimationType): void => {
  Animated.timing(anim, {
    toValue: modalIsOpened ? values.end : values.start,
    duration: values.duration,
    useNativeDriver: true,
  } as Animated.TimingAnimationConfig).start();
};

export default setAnimation;
