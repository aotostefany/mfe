import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/header';

export default () => {
<<<<<<< Updated upstream
  return (
    <div>
      <h1>Testing</h1>
      <MarketingApp />
    </div>
  );
=======
<<<<<<< Updated upstream
  return <MarketingApp />;
=======
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
>>>>>>> Stashed changes
};
