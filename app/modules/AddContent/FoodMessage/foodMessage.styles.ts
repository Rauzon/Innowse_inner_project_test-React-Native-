import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#EEEEEE',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 26,
    color: '#353535',
    paddingRight: '25%',
  },
  button: {
    position: 'absolute',
    bottom: 37,
    left: 24,
    right: 24,
    paddingLeft: 70.5,
    paddingRight: 70.5,
  },
  button_disabled: {
    backgroundColor: '#828282',
  },
  button_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFF',
    letterSpacing: 0.25,
  },
});
