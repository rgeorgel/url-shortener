import { Router } from 'express';
import shortUrlController from '../controllers/shortUrl.controller';

export class ShortUrlRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }

  init() {
    /**
     * @swagger
     * /{code}:
     *   get:
     *     tags:
     *       - shortUrl
     *     name: redirect user to the original page
     *     summary: redirect user to the original page
     *     parameters:
     *       - in: path
     *         name: code
     *         type: string
     *     responses:
     *       '301':
     *         description: redirect to the original page
     */
     this.router.get('/:code', shortUrlController.get);

     /**
      * @swagger
      * /:
      *   post:
      *     tags:
      *       - shortUrl
      *     name: create shortUrl of one url
      *     summary: create shortUrl of one url
      *     consumes:
      *       - application/json
      *     produces:
      *       - application/json
      *     requestBody:
      *       content:
      *         application/json:
      *           schema:
      *             type: object
      *             required:
      *               - originalUrl
      *             properties:
      *                 originalUrl:
      *                   type: string
      *                   description: url to encode
      *     responses:
      *       '200':
      *         description: shortUrl
      *         schema:
      *           $ref: '#/components/schemas/shortUrl'
      */
     this.router.post('/', shortUrlController.post);

     /**
      * @swagger
      * /:
      *   put:
      *     tags:
      *       - shortUrl
      *     name: update shortUrl of one url
      *     summary: update shortUrl of one url
      *     consumes:
      *       - application/json
      *     produces:
      *       - application/json
      *     requestBody:
      *       content:
      *         application/json:
      *           schema:
      *             type: object
      *             required:
      *               - originalUrl
      *               - shortUrlId
      *               - code
      *             properties:
      *                 originalUrl:
      *                   type: string
      *                   description: url to encode
      *                 shortUrlId:
      *                   type: string
      *                   description: shortUrlId of url to update
      *                 code:
      *                   type: string
      *                   description: code of url to update
      *     responses:
      *       '200':
      *         description: shortUrl
      *         schema:
      *           $ref: '#/components/schemas/shortUrl'
      */
     this.router.put('/', shortUrlController.put);
  }

}

const shortUrlRouter = new ShortUrlRouter();
shortUrlRouter.init();

export default shortUrlRouter.router;
