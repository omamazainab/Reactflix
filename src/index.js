import React from 'react';
import ReactDOM from 'react-dom';

import Auth0ProviderWithHistory from './auth0-provider-with-history'

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>

    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>

  </React.StrictMode>,
  document.getElementById('root')
);
