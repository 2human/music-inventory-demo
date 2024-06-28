import React from 'react';

export const HeadingSecondary = ({
  children,
  className,
  styles,
  textAlign,
  fontWeight,
}) => (
  <h1
    className={`heading-secondary ${className}`}
    style={{ ...styles, textAlign, fontWeight }}>
    {children}
  </h1>
);

HeadingSecondary.defaultProps = {
  className: '',
  styles: {},
  textAlign: 'center',
  fontWeight: '300',
};
