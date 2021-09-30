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
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 26,
    color: '#333333',
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-start',
    paddingBottom: 37,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
    backgroundColor: '#FFFFFFdd',
  },
  policy_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 13,
    marginRight: 56,
  },
  checkbox: {
    transform: [{scale: 1.1}],
    alignSelf: 'flex-start',
  },
  policy_content_wrapper: {
    marginLeft: 16,
  },
  policy_content: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: '#353535',
  },
  button: {
    paddingRight: 84,
    paddingLeft: 84,
    paddingBottom: 15,
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
