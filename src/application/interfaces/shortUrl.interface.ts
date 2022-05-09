export interface ShortUrlInterface {
  shortUrlId?: string;
  code?: string;
  originalUrl: string;
  url?: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
