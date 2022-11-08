import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from './UI/router/routes';
import Login from '../pages/Login';
import { AuthContext } from '../context';

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <main>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Posts />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </main>
  );
};

export default AppRouter;
