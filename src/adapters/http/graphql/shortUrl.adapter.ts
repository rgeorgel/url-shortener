import { ShortUrl } from "@app/application/models";
import { ShortUrl as ShortUrlGraphql } from "@app/infrastructure/http/graphql/models/shortUrl.graphql";

export class ShortUrlAdapter {
  static toModel(shortUrlGraphql: ShortUrlGraphql): ShortUrl {
    return new ShortUrl({
      code: shortUrlGraphql.code,
      shortUrlId: shortUrlGraphql.shortUrlId,
      url: shortUrlGraphql.url,
      originalUrl: shortUrlGraphql.originalUrl,
      createdAt: shortUrlGraphql.createdAt,
      updatedAt: shortUrlGraphql.updatedAt,
      deletedAt: shortUrlGraphql.deletedAt,
    });
  }

  static toGraphql(shortUrlModel?: ShortUrl): ShortUrlGraphql | undefined {
    if (!shortUrlModel) {
      return;
    }

    const shortUrlGraphql = new ShortUrlGraphql();
    shortUrlGraphql.shortUrlId = shortUrlModel.shortUrlId!;
    shortUrlGraphql.code = shortUrlModel.code!;
    shortUrlGraphql.originalUrl = shortUrlModel.originalUrl;
    shortUrlGraphql.url = shortUrlModel.url!;
    shortUrlGraphql.createdAt = shortUrlModel.createdAt;
    shortUrlGraphql.updatedAt = shortUrlModel.updatedAt;
    shortUrlGraphql.deletedAt = shortUrlModel.deletedAt;

    return shortUrlGraphql;
  }
}
