import React from 'react';

export const Animation = ({ children, effect }) => (
  <span className={effect}>{children}</span>
);
