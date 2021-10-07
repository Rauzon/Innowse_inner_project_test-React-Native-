import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 37,
    justifyContent: 'center',
  },
  button: {
    paddingRight: 46,
    paddingLeft: 46,
    marginRight: 24,
    marginLeft: 24,
  },
  button_content: {
    fontFamily: 'SFProDisplay Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
});
