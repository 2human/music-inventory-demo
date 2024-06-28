import React from 'react';

export const FlexBox = ({
  children,
  styles,
  justifyContent,
  className,
}) => (
  <div
    className={className}
    style={{ display: 'flex', justifyContent, ...styles }}>
    {children}
  </div>
);

FlexBox.defaultProps = {
  styles: {},
  className: '',
  justifyContent: 'initial',
};
