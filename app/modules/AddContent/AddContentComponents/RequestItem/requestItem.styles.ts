import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingRight: 14,
    paddingBottom: 16,
    paddingLeft: 20,
  },
  content_wrapper: {},
  date: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#828282',
  },
  title: {
    marginTop: 10,
    marginBottom: 6,
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: '#353535',
  },
  request_info: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#828282',
  },
  status_wrapper: {
    justifyContent: 'flex-start',
  },
  status_inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  status_text: {
    marginRight: 5,
    fontFamily: 'SFProDisplay',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    color: '#353535',
  },
});
