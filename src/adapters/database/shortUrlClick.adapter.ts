import { ShortUrlClick } from '@app/application/models';
import { ShortUrlClickMongoose } from '@app/infrastructure/database/models/shortUrlClick.mongoose';

class ShortUrlClickDatabaseAdapter {
  repositoryToModel(repoModel: ShortUrlClickMongoose): ShortUrlClick {
    return new ShortUrlClick({
      shortUrlClickId: repoModel.shortUrlClickId,
      shortUrlId: repoModel.shortUrlId,
      code: repoModel.code,
      originalUrl: repoModel.originalUrl,

      createdAt: repoModel.createdAt,
    });
  }
}

const shortUrlClickDatabaseAdapter = new ShortUrlClickDatabaseAdapter();
export default shortUrlClickDatabaseAdapter;
