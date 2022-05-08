import { ResponseBase } from './responseModel';

export class ErrorResponse extends ResponseBase {
  constructor(code: string, message: string, obj?: object) {
    super();

    this.status = false;
    this.error = { code, message, obj };
  }
}
