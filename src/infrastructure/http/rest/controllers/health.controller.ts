import { Request, Response } from 'express';
import { SuccessResponse } from '@app/infrastructure/http/rest/models/successResponse';

import healthService from '@app/application/services/health.service';

export class HealthController {
  public async get(_: Request, res: Response) {
    const health = healthService.get();
    const response = new SuccessResponse(health);

    res.json(response);
  }
}

const healthController = new HealthController();
export default healthController;
