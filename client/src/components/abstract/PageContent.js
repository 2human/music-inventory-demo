import React from 'react';

export const PageContent = ({ children, className, styles }) => (
  <div className={`page-content ${className}`} style={{ ...styles }}>
    {children}
  </div>
);

PageContent.defaultProps = {
  className: '',
  styles: {},
};
