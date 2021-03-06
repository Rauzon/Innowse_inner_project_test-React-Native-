import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 105,
  },
  content_wrapper_border: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#EFEFEF',
    borderStyle: 'solid',
    paddingBottom: 14,
    paddingTop: 12,
  },
  icon_wrapper: {
    width: 90,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 90,
    height: 60,
  },
  content_wrapper: {
    width: 354,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginLeft: 20,
  },
  title: {
    maxWidth: 210,
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#333333',
    paddingRight: 10,
  },
  date: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 17,
    color: '#828282',
    marginTop: 6,
  },
  top_gap: {
    marginTop: 8,
  },
  padding_bottom_gap: {
    paddingBottom: 14,
  },
});
