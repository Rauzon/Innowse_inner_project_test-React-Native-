import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#FFF',
  },
  header_button: {
    marginLeft: 18,
  },
  header_content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: '#333333',
    paddingRight: 18,
  },
});
