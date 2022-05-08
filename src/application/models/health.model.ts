export class Health {
  constructor(
    api: boolean,
    database: boolean,
    version: string,
  ) {
    this.api = api;
    this.database = database;
    this.version = version;
  }

  api: boolean;
  database: boolean;
  version: string;
}
