import React from 'react';
import { ConnectedCreateRowDropdown } from '../layouts/CreateRowDropdown/ConnectedCreateRowDropdown';
import { ConnectedSearchForm } from '../components/SearchForm/ConnectedSearchForm';
import { ConnectedSearchResults } from '../components/SearchResults/ConnectedSearchResults';
import { HeadingPrimary } from '../components/abstract/HeadingPrimary';
import { Paragraph } from '../components/abstract/Paragraph';
import { Center } from '../components/abstract/Center';
import { FlexBox } from '../components/abstract/FlexBox';

export const Database = ({ admin }) => (
  <div id="database">
    <Database__IntroContainer>
      <Database__IntroContent>
        <HeadingPrimary>Database</HeadingPrimary>
        <Paragraph>
          <Center>
            <i>
              This database contains information on pre-1821 American
              sacred music in printed sources and manuscripts. The
              information was recorded in inventories of the
              collections held by 23 libraries and historical
              societies, with the data then parsed into columns. You
              can search any one of three tables: Collections,
              Sources, and Entries.
            </i>
          </Center>
        </Paragraph>
      </Database__IntroContent>
    </Database__IntroContainer>
    {admin && <ConnectedCreateRowDropdown />}
    <ConnectedSearchForm />
    <ConnectedSearchResults admin={admin} />
  </div>
);

const Database__IntroContainer = ({ children }) => (
  <div className="search__intro-container">{children}</div>
);

const Database__IntroContent = ({ children }) => (
  <span className="search__intro-content">{children}</span>
);

Database.defaultProps = {
  admin: false,
};
