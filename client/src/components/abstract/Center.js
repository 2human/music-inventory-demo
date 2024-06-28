import React from 'react';

export const Center = ({ children, className }) => (
  <div
    className={className}
    style={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
    {children}
  </div>
);
