import React from 'react';
import { Donate } from '../pages/Donate/Donate';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { itRendersTheComponent } from './test-utils/reusableTests';
import {
  childrenOf,
  createShallowRenderer,
  prop,
  type,
  id,
} from './test-utils/shallowHelpers';

describe('App', () => {
  let shallowRender, elementMatching, elementsMatching;

  beforeEach(() => {
    ({ shallowRender, elementMatching, elementsMatching } =
      createShallowRenderer());
  });

  it('renders the #donate element', () => {
    shallowRender(<Donate />);
    expect(elementMatching(id('donate'))).not.toBeNull();
  });

  it('renders the PayPalButtons', () => {
    shallowRender(<Donate />);
    expect(elementMatching(type()));
  });
});
