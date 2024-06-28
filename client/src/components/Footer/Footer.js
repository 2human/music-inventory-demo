import React from 'react';
import { Center } from '../abstract/Center';
import { FlexBox } from '../abstract/FlexBox';

export const Footer = ({ openCitation }) => (
  <div className="footer">
    All Rights Reserved &#169; {new Date().getFullYear()}
    <Citation openCitation={openCitation} />
  </div>
);

const Citation = ({ openCitation }) => (
  <span
    id="searchGuide"
    className="btn-text btn-text--large"
    onClick={openCitation}>
    Cite this Site
  </span>
);
