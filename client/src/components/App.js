import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Donate } from '../pages/Donate/Donate';
import { Database } from '../pages/Database';
import { ConnectedModalController } from './Modal/ModalController/ConnectedModalController';
import { Navigation } from '../layouts/Navigation/Navigation';
import { Footer } from './Footer/Footer';
import { Files } from '../pages/Files';
import { transcriptions } from '../assets/transcriptions/transcriptions';
import { Transcriptions } from '../pages/Transcriptions';
import { Inventories } from '../pages/Inventories';
import { inventories } from '../assets/inventories/inventories';
import { ConnectedFooter } from './Footer/ConnectedFooter';
import { ConnectedDonate } from '../pages/Donate/ConnectedDonate';

function App() {
  return (
    <div className="app">
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" exact render={() => <Database />} />
          <Route path="/database" exact render={() => <Database />} />
          <Route
            path="/admin"
            exact
            render={() => <Database admin={true} />}
          />
          <Route path="/about" exact render={() => <About />} />
          <Route
            path="/transcriptions"
            exact
            render={() => (
              <Transcriptions transcriptions={transcriptions} />
            )}
          />
          <Route
            path="/inventories"
            exact
            render={() => <Inventories inventories={inventories} />}
          />
          <Route
            path="/donate"
            exact
            render={() => <ConnectedDonate />}
          />
        </Switch>
      </div>
      <ConnectedModalController />
      <ConnectedFooter />
    </div>
  );
}

export default App;
