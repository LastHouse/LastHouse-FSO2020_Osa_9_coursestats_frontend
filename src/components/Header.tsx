/* eslint-disable react/prop-types */
import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = (props) => {
  return <h1>{props.courseName}</h1>;
};

export default Header;
