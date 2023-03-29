import React from 'react';
import ReactDOM from 'react-dom/client';

import SharedLayout from './layout';

import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/activities';
import Activity from './pages/activities/id';

import './index.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={'/'} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="activities" element={<Activities />} />
        <Route path="activities/:id" element={<Activity />} />

        <Route path="*" element={<h2>404</h2>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
