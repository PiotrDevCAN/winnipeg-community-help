import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StaticCommunityProvider } from './context/StaticCommunityContext';
import { StaticHelpProvider } from './context/StaticHelpDataContext';
import { APIAuthProvider } from './context/APIAuthContext';
import { AuthProvider } from './context/AuthContext';
import { RouteProvider } from './context/RouteContext';
import BaseLayout from './components/Layout/BaseLayout';
import { PageHeaderProvider } from './context/PageHeaderContext';
import AppRoutes from './router/AppRoutes';
import CookieConsent from './components/CookieConsent';

import './App.css';
// import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <APIAuthProvider>
          <StaticCommunityProvider>
            <StaticHelpProvider>
              <RouteProvider>
                <PageHeaderProvider>
                  <BaseLayout>
                    <AppRoutes />
                  </BaseLayout>
                </PageHeaderProvider>
              </RouteProvider>
            </StaticHelpProvider>
          </StaticCommunityProvider>
        </APIAuthProvider>
      </AuthProvider>
      <CookieConsent />
    </Router>
  );
};

export default App;
