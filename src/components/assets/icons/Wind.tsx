import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgWind(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 8c0-.6.4-1 1.001-1h9.01c.2 0 .5-.1.701-.3.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.2 0-.501.1-.701.3-.4.4-1.002.4-1.402 0-.4-.4-.4-1 0-1.4.5-.6 1.301-.9 2.102-.9.801 0 1.502.3 2.103.9 1.201 1.2 1.201 3.1 0 4.2-.5.6-1.302.9-2.103.9h-9.01C1.401 9 1 8.6 1 8zm13.015 7H2C1.401 15 1 15.4 1 16s.4 1 1.001 1h12.014c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.2 0-.5-.1-.701-.3a.969.969 0 00-1.402 0c-.4.4-.4 1 0 1.4.601.6 1.302.9 2.103.9.8 0 1.502-.3 2.102-.9.6-.6.901-1.3.901-2.1s-.3-1.6-.9-2.1c-.501-.6-1.302-.9-2.103-.9zm3.103-8c1.302-1.4 3.504-1.4 4.906 0 1.301 1.4 1.301 3.6 0 4.9-.7.6-1.602 1-2.503 1H2.001c-.6 0-1.001-.4-1.001-1s.4-1 1.001-1h17.52c.4 0 .801-.1 1.101-.4.601-.6.601-1.5 0-2.1-.6-.6-1.501-.6-2.102 0-.4.4-1.001.4-1.402 0-.4-.4-.4-1 0-1.4z"
        clipRule="evenodd"
      />
      <Mask id="wind_svg__a" width={22} height={18} x={1} y={3} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 8c0-.6.4-1 1.001-1h9.01c.2 0 .5-.1.701-.3.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.2 0-.501.1-.701.3-.4.4-1.002.4-1.402 0-.4-.4-.4-1 0-1.4.5-.6 1.301-.9 2.102-.9.801 0 1.502.3 2.103.9 1.201 1.2 1.201 3.1 0 4.2-.5.6-1.302.9-2.103.9h-9.01C1.401 9 1 8.6 1 8zm13.015 7H2C1.401 15 1 15.4 1 16s.4 1 1.001 1h12.014c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.2 0-.5-.1-.701-.3a.969.969 0 00-1.402 0c-.4.4-.4 1 0 1.4.601.6 1.302.9 2.103.9.8 0 1.502-.3 2.102-.9.6-.6.901-1.3.901-2.1s-.3-1.6-.9-2.1c-.501-.6-1.302-.9-2.103-.9zm3.103-8c1.302-1.4 3.504-1.4 4.906 0 1.301 1.4 1.301 3.6 0 4.9-.7.6-1.602 1-2.503 1H2.001c-.6 0-1.001-.4-1.001-1s.4-1 1.001-1h17.52c.4 0 .801-.1 1.101-.4.601-.6.601-1.5 0-2.1-.6-.6-1.501-.6-2.102 0-.4.4-1.001.4-1.402 0-.4-.4-.4-1 0-1.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#wind_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgWind;
