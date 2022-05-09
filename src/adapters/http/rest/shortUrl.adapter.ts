import { ShortUrl } from "@app/application/models";
import { ShortUrl as ShortUrlRest } from "@app/infrastructure/http/rest/models/shortUrl.model";

export class ShortUrlAdapter {
  static toModel(shortUrlRest: ShortUrlRest): ShortUrl {
    return new ShortUrl({
      code: shortUrlRest.code,
      shortUrlId: shortUrlRest.id,
      url: shortUrlRest.url,
      originalUrl: shortUrlRest.longUrl,
    });
  }

  static toRest(shortUrlModel: ShortUrl): ShortUrlRest {
    const shortUrlRest = new ShortUrlRest();
    shortUrlRest.id = shortUrlModel.shortUrlId!;
    shortUrlRest.code = shortUrlModel.code!;
    shortUrlRest.longUrl = shortUrlModel.originalUrl;
    shortUrlRest.url = shortUrlModel.url!;

    return shortUrlRest;
  }
}