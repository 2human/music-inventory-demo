import React from 'react';

export const OrderedList = ({
  children,
  textSize,
  className,
  indent,
  styles,
}) => (
  <ol
    className={`list__ordered-list ${className ? className : ''} ${
      textSize ? `list__ordered-list--text-${textSize}` : ''
    }`}
    style={{ ...styles, marginLeft: `${indent ? indent : 0}rem` }}>
    {children}
  </ol>
);

export const UnorderedList = ({
  children,
  textSize,
  className,
  indent,
  styles,
}) => (
  <ul
    className={`list__unordered-list ${className ? className : ''} ${
      textSize ? `list__unordered-list--text-${textSize}` : ''
    }`}
    style={{ ...styles, marginLeft: `${indent ? indent : 0}rem` }}>
    {children}
  </ul>
);

export const ListItem = ({ children }) => (
  <li className="list__item">{children}</li>
);
