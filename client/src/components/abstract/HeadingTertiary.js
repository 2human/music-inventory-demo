import React from 'react';

export const HeadingTertiary = ({ children, className, styles }) => (
  <h1
    className={`heading-tertiary ${className}`}
    style={{ ...styles }}>
    {children}
  </h1>
);

HeadingTertiary.defaultProps = {
  className: '',
  styles: {},
};
