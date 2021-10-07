import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: Dimensions.get('window').height,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(53, 53, 53, 0.15)',
    zIndex: 3,
  },
});
