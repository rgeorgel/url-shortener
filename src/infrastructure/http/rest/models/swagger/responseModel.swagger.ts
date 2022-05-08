// Swagger Model Specifications
/**
 * @swagger
 * definitions:
 *   DefaultResponse:
 *     type: object
 *     properties:
 *       status:
 *         type: boolean
 *       data:
 *         type: object
 *         properties:
 *            otherData:
 *              type: object
 *              description: any other data relevant to the request
 *       error:
 *          type: object
 *          properties:
 *            code:
 *              type: string
 *            message:
 *              type: string
 *              description: Longer string describing the error for debugging purposes
 *            obj:
 *              type: object
 *              description: any other data relevant to the debug the error
 *   ErrorResponse:
 *     type: object
 *     properties:
 *       code:
 *         type: string
 *         description: Short string connected to the error type
 *       message:
 *         type: string
 *         description: Longer string describing the error for debugging purposes
 */
