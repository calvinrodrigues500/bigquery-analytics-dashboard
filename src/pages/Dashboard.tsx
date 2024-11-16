import Navbar from '../components/nav/Navbar'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import * as Pages from '../pages';

const Dashboard = () => {

  const AppRoutes = () => {

    const routes = [
      {
        path: '/',
        element: <Pages.Overview />
      },
      {
        path: '/overview',
        element: <Pages.Overview />
      },
      {
        path: '/revenue',
        element: <Pages.Revenue />
      },
      {
        path: '/orders',
        element: <Pages.Orders />
      }
    ];

    return useRoutes(routes);
  };

  return (
    <Router>
      <div className='h-screen'>
        <header className='bg-slate-200 p-5'>
          E-commerce Analytics Dashboard
        </header>
        <main className='flex gap-5 p-5 h-full'>
          <Navbar />
          <main>
            {<AppRoutes />}
          </main>
        </main>
      </div>
    </Router>
  )
}

export default Dashboard
