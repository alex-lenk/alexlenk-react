import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import StoreProvider from 'store/StoreProvider';
import ErrorBoundary from 'components/ErrorBoundary';
import App from 'app';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
