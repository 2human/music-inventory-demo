import React from 'react';

export const PageContainer = ({ children, className, styles }) => (
  <div
    className={`page-container ${className}`}
    style={{ ...styles }}>
    {children}
  </div>
);

PageContainer.defaultProps = {
  className: '',
  styles: {},
};
