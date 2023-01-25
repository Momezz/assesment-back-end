import { Application } from 'express';
import user from './api/user';
import favorite from './api/favorite';

function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/favorite', favorite);
};

export default routes;
