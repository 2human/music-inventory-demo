import React from 'react';
import CloseSVG from '../../assets/images/close-icon.svg';

export const CloseIcon = ({ className }) => (
  <img
    src={require(CloseSVG)}
    className={`close-icon ${className}`}
  />
);
