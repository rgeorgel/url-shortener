import { ShortUrl } from '@app/application/models';
import { ShortUrlMongoose } from '@app/infrastructure/database/models/shortUrl.mongoose';

class ShortUrlDatabaseAdapter {
  repositoryToModel(repoModel: ShortUrlMongoose): ShortUrl {
    return new ShortUrl({
      shortUrlId: repoModel.shortUrlId,
      code: repoModel.code,
      url: repoModel.url,
      originalUrl: repoModel.originalUrl,

      createdAt: repoModel.createdAt,
      updatedAt: repoModel.updatedAt,
      deletedAt: repoModel.deletedAt,
    });
  }
}

const shortUrlDatabaseAdapter = new ShortUrlDatabaseAdapter();
export default shortUrlDatabaseAdapter;