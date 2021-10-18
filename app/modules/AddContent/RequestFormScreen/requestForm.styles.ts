import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 24,
  },
  button_wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 37,
  },
  button: {
    paddingRight: 95,
    paddingLeft: 95,
  },
  button_text: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#FFF',
  },
  button_disabled: {
    backgroundColor: '#828282',
  },
});
