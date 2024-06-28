import React from 'react';
import { NavLink } from 'react-router-dom';
import { createContainer } from './test-utils/domManipulators';
import {
  DonateBtn,
  Logo,
  Navigation,
  NavigationLinksBar,
} from '../layouts/Navigation/Navigation';
import {
  createShallowRenderer,
  type,
} from './test-utils/shallowHelpers';

//TODO add test for verifying logo source
describe('Navigation', () => {
  let shallowRender, elementMatching, elementsMatching;

  beforeEach(() => {
    ({ shallowRender, elementMatching, elementsMatching } =
      createShallowRenderer());
  });

  it('renders the logo image element', () => {
    shallowRender(<Navigation />);
    expect(elementMatching(type(Logo))).not.toBeNull();
  });

  it('renders a NavLink to / around the Logo image', () => {
    shallowRender(<Logo />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[0]).toBeDefined();
    expect(renderedLinks[0].type).toEqual(NavLink);
    expect(renderedLinks[0].props.to).toEqual('/');
    expect(renderedLinks[0].props.children.type).toEqual('img');
  });

  it('renders the donate button', () => {
    shallowRender(<Navigation />);
    expect(elementMatching(type(DonateBtn))).not.toBeNull();
  });

  it('renders a NavLink to /donate inside the donate button', () => {
    shallowRender(<DonateBtn />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[0]).toBeDefined();
    expect(renderedLinks[0].type).toEqual(NavLink);
    expect(renderedLinks[0].props.to).toEqual('/donate');
    expect(renderedLinks[0].props.className).toEqual(
      'navigation__donate btn btn--big'
    );
    expect(renderedLinks[0].props.children).toEqual(
      'Support Our Work'
    );
  });

  it('renders a Home link to /', () => {
    shallowRender(<NavigationLinksBar />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[0]).toBeDefined();
    expect(renderedLinks[0].type).toEqual(NavLink);
    expect(renderedLinks[0].props.to).toEqual('/');
    expect(renderedLinks[0].props.className).toEqual(
      'navigation__link'
    );
    expect(renderedLinks[0].props.children).toEqual('Home');
  });

  it('renders an Inventory link to /datbase', () => {
    shallowRender(<NavigationLinksBar />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[1]).toBeDefined();
    expect(renderedLinks[1].type).toEqual(NavLink);
    expect(renderedLinks[1].props.to).toEqual('/database');
    expect(renderedLinks[1].props.className).toEqual(
      'navigation__link'
    );
    expect(renderedLinks[1].props.children).toEqual('Database');
  });

  it('renders Transcriptions link to /transcriptions', () => {
    shallowRender(<NavigationLinksBar />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[2]).toBeDefined();
    expect(renderedLinks[2].type).toEqual(NavLink);
    expect(renderedLinks[2].props.to).toEqual('/transcriptions');
    expect(renderedLinks[2].props.className).toEqual(
      'navigation__link'
    );
    expect(renderedLinks[2].props.children).toEqual('Transcriptions');
  });

  it('renders Transcriptions link to /transcriptions', () => {
    shallowRender(<NavigationLinksBar />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[3]).toBeDefined();
    expect(renderedLinks[3].type).toEqual(NavLink);
    expect(renderedLinks[3].props.to).toEqual('/inventories');
    expect(renderedLinks[3].props.className).toEqual(
      'navigation__link'
    );
    expect(renderedLinks[3].props.children).toEqual('Inventories');
  });

  it('renders an About link to /about', () => {
    shallowRender(<NavigationLinksBar />);
    const renderedLinks = elementsMatching(type(NavLink));
    expect(renderedLinks[4]).toBeDefined();
    expect(renderedLinks[4].type).toEqual(NavLink);
    expect(renderedLinks[4].props.to).toEqual('/about');
    expect(renderedLinks[4].props.className).toEqual(
      'navigation__link'
    );
    expect(renderedLinks[4].props.children).toEqual('About');
  });
});

//My first test-driven component, saving for sentimintal value :)

// import React from 'react';
// import { createContainer } from './test-utils/domManipulators';
// import { Navigation } from '../components/Navigation/Navigation';

// //TODO add test for verifying logo source
// describe('Navigation', () => {
//   let render, element;

//   beforeEach(() => {
//     ({ render, element } = createContainer());
//   });

//   it('renders a navigation header element', () => {
//     render(<Navigation />);
//     expect(element('header.navigation')).not.toBeNull();
//   });

//   it('renders the navigation container within the header element', () => {
//     render(<Navigation />);
//     expect(element('header > nav.navlink-list')).not.toBeNull();
//   });

//   //TODO: fix this to check for props
//   it('renders the link names within the navlink-list', () => {
//     const links = ['Home', 'Search', 'Shop', 'About'];
//     render(<Navigation />);
//     const navLinkList = element('header > nav.navlink-list');
//     expect(navLinkList.textContent).toContain(links[0]);
//     expect(navLinkList.textContent).toContain(links[1]);
//     expect(navLinkList.textContent).toContain(links[2]);
//     expect(navLinkList.textContent).toContain(links[3]);
//   });

//   it('renders the logo image element', () => {
//     render(<Navigation />);
//     const logoElement = element('img.navigation__logo');
//     expect(logoElement).not.toBeNull();
//   });

//   it('renders the donate button', () => {
//     render(<Navigation />);
//     expect(element('a#donateBtn.btn.btn--big')).not.toBeNull();
//   });
// });
