import React, { useState } from 'react';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';
import Details from './Details';

const App = () => {
  const themeHook = useState('darkBlue')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
};

export default App;
