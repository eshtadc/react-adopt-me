import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

// Do other browser-only stuff here

hydrate(<App />, document.getElementById('root'));
