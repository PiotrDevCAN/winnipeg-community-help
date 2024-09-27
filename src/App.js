import React from 'react';
import AppRoutes from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';

import './App.css';

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <AppRoutes />
      </BaseLayout>
    </Router>
  );
};

export default App;
