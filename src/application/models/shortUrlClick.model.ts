import { ShortUrlClickInterface } from "@app/application/interfaces";

export class ShortUrlClick {
  constructor(shortUrlClick: ShortUrlClickInterface) {
    this.shortUrlClickId = shortUrlClick.shortUrlClickId;
    this.shortUrlId = shortUrlClick.shortUrlId;
    this.code = shortUrlClick.code;
    this.originalUrl = shortUrlClick.originalUrl;

    this.createdAt = shortUrlClick.createdAt;
  }

  isValid(): Boolean {
    if (!this.shortUrlClickId) {
      throw new Error('ShortUrlClickId is required.');
    }

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

  shortUrlClickId?: string;
  shortUrlId: string;
  code: string;
  originalUrl: string;

  createdAt?: Date;
}
