import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '@/App.css';
// import 'leaflet/dist/leaflet.css';

// Providers
import { AppMessageProvider } from './context/auxiliary/AppMessageContext';
import { AppNotificationProvider } from '@/context/auxiliary/AppNotificationContext';
import { AuthProvider } from '@/context/auth/AuthContext';
import { APIAuthProvider } from '@/context/auth/APIAuthContext';
import { StaticCommunityProvider } from '@/context/static/StaticCommunityContext';
import { StaticHelpProvider } from '@/context/static/StaticHelpDataContext';
import { UserProvider } from '@/context/mainTypes/UserContext';
import { NeedyProvider } from '@/context/mainTypes/NeedyContext';
import { VolunteerProvider } from '@/context/mainTypes/VolunteerContext';
import { RouteProvider } from '@/context/RouteContext';
import { PageHeaderProvider } from '@/context/PageHeaderContext';

// Components
import BaseLayout from '@/components/Layout/BaseLayout';
import AppRoutes from '@/router/AppRoutes';
import CookieConsent from '@/components/CookieConsent';

// Grouping all providers for clarity
const AppProviders = ({ children }) => (
    <AppMessageProvider>
        <AppNotificationProvider>
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
        </AppNotificationProvider>
    </AppMessageProvider>
);

const App = () => {
    return (
        <Router>
            <AppProviders>
                <BaseLayout>
                    <AppRoutes />
                </BaseLayout>
            </AppProviders>
            <CookieConsent />
        </Router>
    );
};

export default App;
