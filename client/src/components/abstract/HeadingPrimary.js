import React from 'react';

export const HeadingPrimary = ({
  children,
  className,
  styles,
  textAlign,
}) => (
  <h1
    className={`heading-primary ${className}`}
    style={{ ...styles, textAlign }}>
    {children}
  </h1>
);

HeadingPrimary.defaultProps = {
  className: '',
  styles: {},
  textAlign: 'center',
};
