import * as path from 'path';

import express from 'express';
import logger from 'morgan';
import favicon from 'serve-favicon'; 


export const createServer = () => {
  const server = new express();

  server.use(express.json());
  server.use(logger('dev'));

  server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
};
