import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '@/App.css';
// import 'leaflet/dist/leaflet.css';

// Providers
import { AuthProvider } from '@/context/AuthContext';
import { APIAuthProvider } from '@/context/APIAuthContext';
import { StaticCommunityProvider } from '@/context/StaticCommunityContext';
import { StaticHelpProvider } from '@/context/StaticHelpDataContext';
import { UserProvider } from '@/context/UserContext';
import { NeedyProvider } from './context/NeedyContext';
import { VolunteerProvider } from '@/context/VolunteerContext';
import { RouteProvider } from '@/context/RouteContext';
import { PageHeaderProvider } from '@/context/PageHeaderContext';

// Components
import BaseLayout from '@/components/Layout/BaseLayout';
import AppRoutes from '@/router/AppRoutes';
import CookieConsent from '@/components/CookieConsent';

// Grouping all providers for clarity
const Providers = ({ children }) => (
  <AuthProvider>
    <APIAuthProvider>
      <RouteProvider>
        <StaticCommunityProvider>
          <StaticHelpProvider>
            <UserProvider>
              <NeedyProvider>
                <VolunteerProvider>
                  <PageHeaderProvider>
                    {children}
                  </PageHeaderProvider>
                </VolunteerProvider>
              </NeedyProvider>
            </UserProvider>
          </StaticHelpProvider>
        </StaticCommunityProvider>
      </RouteProvider>
    </APIAuthProvider>
  </AuthProvider>
);

const App = () => {
  return (
    <Router>
      <Providers>
        <BaseLayout>
          <AppRoutes />
        </BaseLayout>
      </Providers>
      <CookieConsent />
    </Router>
  );
};

export default App;
