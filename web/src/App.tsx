import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';

import Routes from './routes';
import Theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <Theme />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
