import { routerAPI } from './routers/routerAPI.js';
import { routerAuth } from './routers/routerAuth.js';

export function createRouter(server) {
  server.use('/auth', routerAuth);
  server.use('/api', routerAPI);

  return server;
};
