import React, {memo} from 'react';
import {Animated, ViewStyle} from 'react-native';
import useAnimations from '../../hooks/useAnimations';
import styles from './droppedView.styles';

interface IDroppedView {
  style: ViewStyle;
  children: JSX.Element;
  isOpened: boolean;
}

const DroppedView = memo(
  ({style, children, isOpened}: IDroppedView): JSX.Element => {
    const {fadeAnim, dropAnim} = useAnimations({
      transformsValues: {start: -1000, end: 45, duration: 400},
      fadeValues: {start: 0, end: 1, duration: 500},
      isOpened,
    });
    return (
      <>
        <Animated.View
          style={{
            ...style,
            opacity: fadeAnim,
            transform: [{translateY: dropAnim}],
          }}>
          {children}
        </Animated.View>
        <Animated.View
          style={{
            ...styles.wrapper,
            opacity: fadeAnim,
            transform: [{translateY: dropAnim}],
          }}
        />
      </>
    );
  },
);

export default DroppedView;
