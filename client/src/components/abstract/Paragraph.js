import React from 'react';

export const Paragraph = ({
  children,
  className,
  styles,
  textSize,
  indent,
}) => (
  <h1
    className={`paragraph ${className} ${
      textSize ? `paragraph--text-${textSize}` : ''
    }`}
    style={{ ...styles, marginLeft: `${indent}rem` }}>
    {children}
  </h1>
);

Paragraph.defaultProps = {
  className: '',
  styles: {},
  textSize: null,
};
