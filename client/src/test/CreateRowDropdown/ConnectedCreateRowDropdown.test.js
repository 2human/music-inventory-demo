import React from 'react';
import {
  ConnectedCreateRowDropdown,
  mapDispatchToProps,
  mapStateToProps,
} from '../../layouts/CreateRowDropdown/ConnectedCreateRowDropdown';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { createConnectorShallowRenderer } from '../test-utils/shallowHelpers';
import { itMapsStateToProps } from '../test-utils/connectorHelpers';
import { linkProps } from '../../layouts/CreateRowDropdown/dropdownHelpers';
import { openCreateRow } from '../../store/actions';

describe('ConnectedCreateRowDropdown', () => {
  let shallowRenderConnector, connectedChild;
  beforeEach(() => {
    ({ shallowRenderConnector, connectedChild } =
      createConnectorShallowRenderer());
  });

  it('connects the Dropdown component', () => {
    shallowRenderConnector(<ConnectedCreateRowDropdown />);
    expect(connectedChild()).toEqual(Dropdown);
  });

  describe('mapStateToProps', () => {
    itMapsStateToProps(mapStateToProps(), 'links', linkProps);
    itMapsStateToProps(mapStateToProps(), 'parentLink', 'Create');
  });

  describe('mapDispatchToPrps', () => {
    it('maps the openCreateRow action to linkClickCallback', () => {
      expect(mapDispatchToProps).toMatchObject({
        linkClickCallback: openCreateRow,
      });
    });
  });
});
