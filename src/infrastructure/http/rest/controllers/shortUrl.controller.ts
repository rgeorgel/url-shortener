import { ShortUrlAdapter } from '@app/adapters/http/rest/shortUrl.adapter';
import shortUrlService from '@app/application/services/shortUrl.service';
import { Request, Response } from 'express';
import { ErrorResponse } from '../models/errorResponse';
import { SuccessResponse } from '../models/successResponse';

export class ShortUrlController {
  public async get(req: Request, res: Response) {
    const code = req.params.code;
    const shortUrl = await shortUrlService.getByCode(code);

    if (!shortUrl) {
      return res.status(404).json(new ErrorResponse(
        'ERROR_SHORT_URL_NOT_FOUND',
        'Not Found',
      ));
    }

    return res.redirect(shortUrl.originalUrl);
  }

  public async post(req: Request, res: Response) {
    try {
      const { body } = req;
      const { originalUrl } = body;
      const shortUrl = await shortUrlService.create(originalUrl);
      const shortUrlDto = ShortUrlAdapter.toRest(shortUrl);

      const response = new SuccessResponse(shortUrlDto);

      return res.json(response);
    } catch (err: any) {
      const response = new ErrorResponse(
        'ERROR_SHORT_URL_CREATE',
        err.message,
      );
      return res.status(400).json(response);
    }
  }

  public async put(req: Request, res: Response) {
    try {
      const { body } = req;

      const model = ShortUrlAdapter.toModel(body);
      const shortUrlUpdated = await shortUrlService.update(model);
      const shortUrlDto = ShortUrlAdapter.toRest(shortUrlUpdated!);

      const response = new SuccessResponse(shortUrlDto);

      return res.json(response);
    } catch (err: any) {
      const response = new ErrorResponse(
        'ERROR_SHORT_URL_UPDATE',
        err.message,
      );
      return res.status(400).json(response);
    }
  }
}

const shortUrlController = new ShortUrlController();
export default shortUrlController;
