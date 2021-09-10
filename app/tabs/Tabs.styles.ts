import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    marginTop: 2,
    marginBottom: 2,
    marginRight: 24,
    marginLeft: 24,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 14,
  },
  logo_img: {
    width: 100,
    height: 14,
  },
  container_wrapper: {
    width: 38,
    height: 38,
    borderRadius: 50,
  },
  container: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(195, 45, 44, 0.1)',
    borderRadius: 50,
  },
  content: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    color: '#C32D2C',
  },
});
