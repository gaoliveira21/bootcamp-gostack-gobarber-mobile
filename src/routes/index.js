import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './auth';
import App from './app';

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);
  const routes = signed ? <App /> : <Auth />;
  return routes;
};

export default Routes;
