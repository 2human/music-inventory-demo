import React from 'react';
import { createContainer } from './domManipulators';
import { createShallowRenderer, type } from './shallowHelpers';

let render, element;

({ render, element } = createContainer());

let shallowRender, elementMatching, elementsMatching;

({ shallowRender, elementMatching, elementsMatching } =
  createShallowRenderer());

export const itRendersTheElement = (component, selector) => {
  it(`renders the ${selector} element`, () => {
    render(component);
    expect(element(selector)).not.toBeNull();
  });
};

export const itRendersTheComponent = (parent, component) => {
  it(`renders the ${component} component`, () => {
    shallowRender(parent);
    expect(elementMatching(type(component))).toBeDefined();
  });
};

export const itRendersWithPropValue = (
  parent,
  component,
  prop,
  value
) => {
  it(`renders a ${component} component with the right ${prop} value`, () => {
    shallowRender(parent);
    //get array of elements in case element exists more than once
    let renderedComponents = elementsMatching(type(component));
    const hasPropWithValue = renderedComponents.some(
      (comp) => comp.props[prop] === value
    );
    expect(hasPropWithValue).toEqual(true);
  });
};
