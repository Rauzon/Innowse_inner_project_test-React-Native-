import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 19,
    marginLeft: 16,
    paddingRight: 16,
  },
  title: {
    width: 276,
    height: 52,
    marginBottom: 29,
  },
  title_content: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
    color: '#333333',
  },
  button: {
    width: 327,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    marginBottom: 40,
    backgroundColor: '#C32D2C',
    borderRadius: 10,
  },
  button_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
});
