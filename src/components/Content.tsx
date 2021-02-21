/* eslint-disable react/prop-types */
import React from 'react';
import { ContentProps } from '../types';
import Part from './Part';

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      <Part courseParts={props.courseParts} />
    </div>
  );
};

export default Content;
