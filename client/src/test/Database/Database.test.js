import React from 'react';
import { Database } from '../../pages/Database';
import {
  itRendersWithPropValue,
  itRendersTheComponent,
  itRendersTheElement,
} from '../test-utils/reusableTests';
import { createShallowRenderer } from '../test-utils/shallowHelpers';
import {
  createContainer,
  createContainerWithStore,
} from '../test-utils/domManipulators';
import { ConnectedCreateRowDropdown } from '../../layouts/CreateRowDropdown/ConnectedCreateRowDropdown';
import { expectRedux } from 'expect-redux';
import { ConnectedSearchForm } from '../../components/SearchForm/ConnectedSearchForm';
import { ConnectedSearchResults } from '../../components/SearchResults/ConnectedSearchResults';

describe('Database', () => {
  let renderWithStore, element;

  beforeEach(() => {
    ({ renderWithStore, element } = createContainerWithStore());
  });

  it('renders the #database element', () => {
    renderWithStore(<Database />);
    expect(element('#database')).not.toBeNull();
  });

  itRendersTheComponent(
    <Database admin={true} />,
    ConnectedCreateRowDropdown
  );
  itRendersTheComponent(
    <Database admin={true} />,
    ConnectedSearchForm
  );
  itRendersTheComponent(
    <Database admin={true} />,
    ConnectedSearchResults
  );
});
