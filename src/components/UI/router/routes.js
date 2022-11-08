import About from '../../../pages/About';
import Error from '../../../pages/Error';
import Posts from '../../../pages/Posts';
import PostIdPage from '../../../pages/PostIdPage';
import Login from '../../../pages/Login';
import Contacts from '../../../pages/Contacts';

export const privateRoutes = [
  { path: '/about', element: About, exact: false },
  { path: '/posts', element: Posts, exact: true },
  { path: '/contacts', element: Contacts, exact: false },
  { path: '/posts/:id', element: PostIdPage, exact: true },
];

export const publicRoutes = [{ path: '/login', element: Login, exact: false }];
