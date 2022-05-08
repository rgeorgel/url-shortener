import 'module-alias/register';
import 'reflect-metadata';
import app from '@app/infrastructure/http/server';
import config from '@app/config';
import database from '@app/infrastructure/database/';
import logger from '@app/infrastructure/logger';

database.init();

app.httpServer.listen(config.server.port, () => {
  logger.log(`[SERVER] Running at http://localhost:${config.server.port}`);
});
