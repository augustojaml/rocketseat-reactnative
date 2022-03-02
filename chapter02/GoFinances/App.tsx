import React from 'react';
import { AppTheme, AppThemeProvider } from './src/hooks/useAppTheme';
import { Dashboard } from './src/pages/Dashboard';

export default function App() {
  return (
    <>
      <AppThemeProvider>
        <AppTheme>
          <Dashboard />
        </AppTheme>
      </AppThemeProvider>
    </>
  );
}
