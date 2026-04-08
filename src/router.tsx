import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import { PATHS } from './constants/paths';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import HomePage from './pages/home-page/HomePage';
import NotFound from './pages/not-found/NotFound';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      {
        path: PATHS.home,
        element: <HomePage />,
      },
      {
        path: PATHS.about,
        element: <About />,
      },
      {
        path: PATHS.contact,
        element: <Contact />,
      },
    ],
  },
  {
    path: PATHS.notFound,
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to='/not-found' />,
  },
]);

export default router;
