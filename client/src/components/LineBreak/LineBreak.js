import React from 'react';

export const LineBreak = ({ styles, className }) => (
  <div
    className={className}
    style={{
      border: 'solid lightgrey',
      borderWidth: '1px 0 0 0',
      ...styles,
    }}
  />
);

LineBreak.defaultProps = {
  styles: {},
  className: '',
};
