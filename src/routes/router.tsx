import { createBrowserRouter, redirect } from 'react-router-dom';
import HomeView from '../views/HomeView.tsx';
import NotFound from '../views/NotFound.tsx';

const HOME_URI = '/home';

const router = createBrowserRouter([
    {
        path: HOME_URI,
        element: <HomeView/>,
    },
    {
        path: '/',
        loader: async () => redirect(HOME_URI),
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;

export {
    HOME_URI,
};
