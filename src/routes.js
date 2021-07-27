import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Charity from 'src/pages/Charity';
import Temple from 'src/pages/Temple';
import Meditation from 'src/pages/Meditation';
import Travel from 'src/pages/Travel';
import VeganShop from 'src/pages/VeganShop';
import Events from 'src/pages/Events';
import Settings from 'src/pages/Settings';
import AddCharity from 'src/pages/Post/AddCharity';
import AddMeditation from 'src/pages/Post/AddMeditation';
import AddVeganShop from 'src/pages/Post/AddVeganShop';
import AddEvents from 'src/pages/Post/AddEvents';
import AddTours from 'src/pages/Post/AddTours';
import AddTemple from 'src/pages/Post/AddTemple';

const routes = (isAuth) => [
  {
    path: 'app',
    element: isAuth ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: 'post/charity', element: <AddCharity /> },
      { path: 'post/meditation', element: <AddMeditation /> },
      { path: 'post/shop', element: <AddVeganShop /> },
      { path: 'post/tours', element: <AddTours /> },
      { path: 'post/temple', element: <AddTemple /> },
      { path: 'post/events', element: <AddEvents /> },
      { path: 'account', element: <Account /> },
      { path: 'charity', element: <Charity /> },
      { path: 'temple', element: <Temple /> },
      { path: 'travel', element: <Travel /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'shop', element: <VeganShop /> },
      { path: 'events', element: <Events /> },
      { path: 'meditation', element: <Meditation /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: !isAuth ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
