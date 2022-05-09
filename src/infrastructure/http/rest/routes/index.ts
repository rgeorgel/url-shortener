import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import healthRoute from '@app/infrastructure/http/rest/routes/health.route';
import * as swaggerOptions from '@app/infrastructure/http/rest/routes/swagger.json';
import config from '@app/config';
import shortUrlRoute from './shortUrl.route';

export class ApplicationRouter {
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    const options: swaggerJSDoc.Options = {
      swaggerDefinition: swaggerOptions,
      apis: [
        './src/infrastructure/http/rest/models/swagger/*.ts',
        './src/infrastructure/http/rest/**/*route.ts',
      ],
    };

    const specs = swaggerJSDoc(options);

    if (config.isDev) {
      this.router.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
    }

    this.router.use('/health', healthRoute);
    this.router.use('/', shortUrlRoute);
  }
}

const applicationRouter = new ApplicationRouter();
applicationRouter.init();

export default applicationRouter.router;
