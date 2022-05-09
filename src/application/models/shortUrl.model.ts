import { ShortUrlInterface } from "@app/application/interfaces";

export class ShortUrl {
  constructor(shortUrl: ShortUrlInterface) {
    this.shortUrlId = shortUrl.shortUrlId;
    this.code = shortUrl.code || '';
    this.originalUrl = shortUrl.originalUrl;
    this.url = shortUrl.url;

    this.createdAt = shortUrl.createdAt;
    this.updatedAt = shortUrl.updatedAt;
    this.deletedAt = shortUrl.deletedAt;
  }

  isValid(): Boolean {
    if (!this.shortUrlId) {
      throw new Error('ShortUrlId is required.');
    }

    if (!this.code) {
      throw new Error('Code is required.');
    }

    if (!this.originalUrl) {
      throw new Error('OriginalUrl is required.');
    }

    return true;
  }

  shortUrlId?: string;
  code: string;
  originalUrl: string;
  url?: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}