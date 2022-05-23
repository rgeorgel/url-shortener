export interface ShortUrlClickInterface {
  shortUrlClickId?: string;
  shortUrlId: string;
  code: string;
  originalUrl: string;

  createdAt?: Date;
}