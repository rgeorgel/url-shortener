import { Router } from 'express';

import healthController from '@app/infrastructure/http/rest/controllers/health.controller';

export class HealthRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  init() {
    /**
     * @swagger
     * /health:
     *   get:
     *     tags:
     *       - health
     *     name: check application health
     *     summary: check application health
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     responses:
     *       '200':
     *         description: A single health object
     *         schema:
     *           $ref: '#/components/schemas/Health'
     */
    this.router.get('/', healthController.get);
  }
}

const healthRouter = new HealthRouter();
healthRouter.init();

export default healthRouter.router;
