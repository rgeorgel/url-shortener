import { ShortUrlClick } from '@app/application/models';
import { ShortUrlClick as ShortUrlClickGraphql } from '@app/infrastructure/http/graphql/models/shortUrlClick.graphql';

export class ShortUrlClickAdapter {
  static toModel(shortUrlClickGraphql: ShortUrlClickGraphql): ShortUrlClick {
    return new ShortUrlClick({
      shortUrlClickId: shortUrlClickGraphql.shortUrlClickId,
      code: shortUrlClickGraphql.code,
      shortUrlId: shortUrlClickGraphql.shortUrlId,
      originalUrl: shortUrlClickGraphql.originalUrl,
      createdAt: shortUrlClickGraphql.createdAt,
    });
  }

  static toGraphql(shortUrlClickModel?: ShortUrlClick): ShortUrlClickGraphql | undefined {
    if (!shortUrlClickModel) {
      return;
    }

    const shortUrlClickGraphql = new ShortUrlClickGraphql();
    shortUrlClickGraphql.shortUrlClickId = shortUrlClickModel.shortUrlClickId!;
    shortUrlClickGraphql.shortUrlId = shortUrlClickModel.shortUrlId;
    shortUrlClickGraphql.code = shortUrlClickModel.code;
    shortUrlClickGraphql.originalUrl = shortUrlClickModel.originalUrl;
    shortUrlClickGraphql.createdAt = shortUrlClickModel.createdAt;

    return shortUrlClickGraphql;
  }
}
