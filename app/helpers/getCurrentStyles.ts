import s from '../components/CustomAppHeader/customAppHeader.styles';
import {ViewStyle} from 'react-native';

const getCurrentStyles = (isPressed: boolean): ViewStyle[] => {
  return [{backgroundColor: isPressed ? '#C32D2C' : '#f3f3f3'}, s.button];
};

export default getCurrentStyles;
