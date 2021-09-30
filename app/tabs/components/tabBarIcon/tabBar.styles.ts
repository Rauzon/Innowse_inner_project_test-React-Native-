import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingBottom: '18.5%',
  },
  top_line: {
    position: 'absolute',
    width: 76,
    height: 3,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#C32D2C',
  },
  img_wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_wrapper: {
    marginTop: -25,
  },
  text: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
  },
  text_focused: {
    color: '#C63031',
  },
  text_unfocused: {
    color: '#828282',
  },
});
