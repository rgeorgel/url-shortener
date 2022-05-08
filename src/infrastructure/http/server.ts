import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createServer, Server } from 'http';
import logger from 'morgan';
import config from '@app/config';
import ApplicationRouter from '@app/infrastructure/http/rest/routes';


class App {
  get express(): express.Application {
    return this._express;
  }

  get httpServer(): Server {
    return this._httpServer;
  }

  private readonly _express: express.Application;
  private readonly _httpServer: Server;

  constructor() {
    this._express = express();
    this._httpServer = createServer(this._express);
    this.middleware().routes();
  }

  private middleware(): App {
    this._express.use(logger('dev'));
    this._express.use(bodyParser.json());
    this._express.use(bodyParser.urlencoded({ extended: false }));
    this._express.use(cors({ origin: config.isDev ? '*' : undefined }));

    return this;
  }

  private routes(): App {
    this._express.use('/', ApplicationRouter);

    return this;
  }

}

const app = new App();
export default app;
