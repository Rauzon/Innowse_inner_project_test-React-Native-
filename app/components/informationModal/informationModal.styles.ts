import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal_wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000dd',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  modal_inner: {
    width: '100%',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 48,
    paddingBottom: 64,
    position: 'relative',
    backgroundColor: '#FFF',
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
  },
  close_btn: {
    position: 'absolute',
    top: 16,
    right: 8,
    zIndex: 999,
    width: 14,
    height: 14,
  },
  close_line: {
    position: 'absolute',
    width: 2.5,
    height: 18,
    backgroundColor: '#C4C4C4',
    borderRadius: 2,
    transform: [{rotate: '45deg'}],
  },
});
