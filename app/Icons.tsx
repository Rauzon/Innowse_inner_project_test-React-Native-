import Svg, {Path} from 'react-native-svg';
import React from 'react';

export const DashedLineIcon = (props: any) => {
  return (
    <Svg
      width={3}
      height={149}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={0.3}
        d="M1 0v149"
        stroke="#828282"
        strokeWidth={0.5}
        strokeDasharray="4 4"
      />
    </Svg>
  );
};
