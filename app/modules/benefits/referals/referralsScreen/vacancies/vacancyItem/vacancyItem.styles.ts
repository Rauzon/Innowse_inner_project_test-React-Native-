import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(224, 183, 183, 0.5)',
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_firstItem: {
    marginTop: 0,
  },
  container_lastItem: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  vacancy_wrapper: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 6,
  },
  content_wrapper: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  vacancy: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#353535',
    letterSpacing: 0.25,
  },
  salary: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 33,
    color: '#C32D2C',
  },
  city: {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#828282',
  },
});
