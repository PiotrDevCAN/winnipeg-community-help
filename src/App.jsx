import React, { useEffect } from "react";

import "@/App.css";
// import 'leaflet/dist/leaflet.css';

// Providers
import { AppMessageProvider } from "@/context/auxiliary/AppMessageContext";
import { AppNotificationProvider } from "@/context/auxiliary/AppNotificationContext";
import { AuthProvider } from "@/context/auth/AuthContext";
import { APIAuthProvider } from "@/context/auth/APIAuthContext";
import { PageHeaderProvider } from "@/context/auxiliary/PageHeaderContext";
import { StaticCommunityProvider } from "@/context/static/StaticCommunityContext";
import { StaticHelpProvider } from "@/context/static/StaticHelpDataContext";
import { StaticPeopleProvider } from "./context/static/StaticPeopleContext";

// Components
import BaseLayout from "@/components/Layout/BaseLayout";
import AppRoutes from "@/router/AppRoutes";
import CookieConsent from "@/components/CookieConsent";
import { SuggestionFormProvider } from "@/context/auxiliary/SuggestionFormContext";

// Grouping all providers for clarity
const AppProviders = ({ children }) => (
  <AppMessageProvider>
    <AppNotificationProvider>
      <SuggestionFormProvider>
        <AuthProvider>
          <APIAuthProvider>
            <StaticCommunityProvider>
              <StaticHelpProvider>
                <StaticPeopleProvider>
                  <PageHeaderProvider>
                    {children}
                  </PageHeaderProvider>
                </StaticPeopleProvider>
              </StaticHelpProvider>
            </StaticCommunityProvider>
          </APIAuthProvider>
        </AuthProvider>
      </SuggestionFormProvider>
    </AppNotificationProvider>
  </AppMessageProvider>
);

const App = () => {
  return (
    <>
      <AppProviders>
        <BaseLayout>
          <AppRoutes />
        </BaseLayout>
      </AppProviders>
      <CookieConsent />
    </>
  );
};

export default App;
