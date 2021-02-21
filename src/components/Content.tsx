/* eslint-disable react/prop-types */
import React from 'react';

interface courses {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: courses[];
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      {props.courseParts.map((course, i) => (
        <p key={i}>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
