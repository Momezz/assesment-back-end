import { Application } from 'express';
import authLocal from './auth/local'
import user from './api/user';
import favorite from './api/favorite';

function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/favorite', favorite);

  //auth routes
  app.use('/auth/local', authLocal);
};

export default routes;
