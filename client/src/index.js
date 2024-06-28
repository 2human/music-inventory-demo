import React from 'react';
import ReactDOM from 'react-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { configureStore } from './store';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const initialOptions = {
  'client-id':
    'AZspb4rnRsjK3SBQoXsqFcVI7EKcdfY8t_70KqV_0wjjW_ckLYmmKWI-sLfb_TkypW-AGdFVUbrv1_DF',
  currency: 'USD',
  intent: 'capture',
  // 'data-client-token': 'abc123xyz',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <PayPalScriptProvider options={initialOptions}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
