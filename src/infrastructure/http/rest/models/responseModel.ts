export class ResponseBase {
  public status = false;
  public data?: object;
  public error?: {
    code: string;
    message: string;
    obj?: object;
  };
}
