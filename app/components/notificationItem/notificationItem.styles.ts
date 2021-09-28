import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 19,
    paddingRight: 20,
    paddingBottom: 12,
  },
  container_border: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  icon_wrapper: {
    paddingTop: 8,
  },
  content_wrapper: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  time: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#828282',
  },
  title: {
    marginTop: 2,
    marginBottom: 4,
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#353535',
  },
  content: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#353535',
  },
  button_wrapper: {
    marginTop: 8,
  },
  button_content: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#C63031',
  },
  item_viewed: {
    backgroundColor: '#F9EAEA',
  },
});
