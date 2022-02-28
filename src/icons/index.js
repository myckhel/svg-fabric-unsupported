import React from 'react';
import {SvgXml} from 'react-native-svg';

export const checkedCircle = `<svg xmlns="http://www.w3.org/2000/svg" width="50.003" height="50.003" viewBox="0 0 50.003 50.003">
  <path id="check_1_" data-name="check (1)" d="M25,0A25,25,0,1,0,50,25,25.029,25.029,0,0,0,25,0ZM37.673,19.7,24.131,33.246a2.081,2.081,0,0,1-2.946,0l-6.771-6.771a2.083,2.083,0,0,1,2.946-2.946l5.3,5.3,12.07-12.069A2.083,2.083,0,1,1,37.673,19.7Zm0,0" fill="#083047"/>
</svg>`;

export const CheckedCircle = ({...p}) => <SvgXml {...p} xml={checkedCircle} />;
