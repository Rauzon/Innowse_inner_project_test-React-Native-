import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal_wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000dd',
    paddingTop: '50%',
  },
  close_btn: {
    position: 'absolute',
    top: 15,
    right: 0,
    zIndex: 999,
    width: 17.5,
    height: 17.5,
  },
  close_line: {
    position: 'absolute',
    width: 1.5,
    height: 22,
    backgroundColor: '#FFF',
    transform: [{rotate: '45deg'}],
  },
  close_line_rotated: {
    transform: [{rotate: '-45deg'}],
  },
});
