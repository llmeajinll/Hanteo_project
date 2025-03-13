import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './router/router.jsx';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';

import { startMocking } from './mocks/broswer.js';

startMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <>
      <RouterProvider router={router} />
      <App />
    </>
  );
});
