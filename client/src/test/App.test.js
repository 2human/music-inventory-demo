import React from 'react';
import { Switch } from 'react-router-dom';
import {
  childrenOf,
  createShallowRenderer,
  prop,
  type,
} from './test-utils/shallowHelpers';
import App from '../components/App';
import { itRendersTheComponent } from './test-utils/reusableTests';
import { Navigation } from '../layouts/Navigation/Navigation';
import { ConnectedModalController } from '../components/Modal/ModalController/ConnectedModalController';
import { Database } from '../pages/Database';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Donate } from '../pages/Donate/Donate';
import { Files } from '../pages/Files';
import { Transcriptions } from '../pages/Transcriptions';
import { Inventories } from '../pages/Inventories';
import { ConnectedDonate } from '../pages/Donate/ConnectedDonate';

describe('App', () => {
  let shallowRender, elementMatching, elementsMatching;

  beforeEach(() => {
    ({ shallowRender, elementMatching, elementsMatching } =
      createShallowRenderer());
  });

  itRendersTheComponent(<App />, Navigation);
  itRendersTheComponent(<App />, ConnectedModalController);
  itRendersTheComponent(<App />, Switch);

  const switchElement = () => elementMatching(type(Switch));
  const childRoutes = () => childrenOf(elementMatching(type(Switch)));

  const routeFor = (path) => childRoutes().find(prop('path', path));

  it('renders the Home page as the default route', () => {
    shallowRender(<App />);
    expect(routeFor('/')).toBeDefined();
    expect(routeFor('/').props.render().type).toEqual(Home);
  });

  it('renders the Database page at the /search endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/search')).toBeDefined();
    expect(routeFor('/search').props.render().type).toEqual(Database);
  });
  it('renders the Database page at the /search endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/database')).toBeDefined();
    expect(routeFor('/database').props.render().type).toEqual(
      Database
    );
  });

  it('renders the About page at the /about endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/about')).toBeDefined();
    expect(routeFor('/about').props.render().type).toEqual(About);
  });

  it('renders the Transcriptions page at the /transcriptions endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/transcriptions')).toBeDefined();
    expect(routeFor('/transcriptions').props.render().type).toEqual(
      Transcriptions
    );
  });

  it('renders the Inventories page at the /inventories endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/inventories')).toBeDefined();
    expect(routeFor('/inventories').props.render().type).toEqual(
      Inventories
    );
  });

  it('renders the Donate page at the /donate endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/donate')).toBeDefined();
    expect(routeFor('/donate').props.render().type).toEqual(
      ConnectedDonate
    );
  });

  it('renders the Donate page at the /admin endpoint', () => {
    shallowRender(<App />);
    expect(routeFor('/admin')).toBeDefined();
    expect(routeFor('/admin').props.render().type).toEqual(Database);
  });
});
