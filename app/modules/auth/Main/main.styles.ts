import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title_wrapper: {
    marginTop: '85%',
    paddingRight: 47,
    paddingLeft: 32,
    marginBottom: 85,
  },
  top_title: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    color: '#030303',
  },
  bottom_title: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#C63131',
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  subtitle_wrapper: {
    // marginLeft: '2%',
  },
  subtitle: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    color: '#929292',
    paddingRight: '10%',
  },
  button: {
    borderColor: 'rgba(0, 0, 0, 0.54)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 29,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 92,
    paddingLeft: 87,
  },
  button_content: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 9,
    color: 'rgba(0, 0, 0, 0.54)',
    letterSpacing: 0.25,
  },
});