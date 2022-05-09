import shortUrlDatabaseAdapter from "@app/adapters/database/shortUrl.adapter";
import { ShortUrlRepositoryInterface } from "@app/application/interfaces/database/shortUrlRepository.interface";
import { ShortUrl } from "@app/application/models";
import database from '@app/infrastructure/database/models/shortUrl.mongoose';
import utils from '@app/infrastructure/helpers/util';

export class ShortUrlRepository implements ShortUrlRepositoryInterface {
  async create(shortUrl: ShortUrl): Promise<ShortUrl> {
    let document = await database.findOne({
      code: shortUrl.code,
    });

    if (!document) {
      document = await database.create(
        utils.removeUndefinedProps(shortUrl),
      );
    }

    return shortUrlDatabaseAdapter.repositoryToModel(document);
  }

  public async update(shortUrl: ShortUrl): Promise<ShortUrl> {
    const document = await database.findOne({
      shortUrlId: shortUrl.shortUrlId,
    });

    if (document) {
      await database.updateOne(
        {
          shortUrlId: shortUrl.shortUrlId,
        },
        utils.removeUndefinedProps(shortUrl),
      );

      return shortUrl;
    }

    return this.create(shortUrl);
  }

  public async delete(shortUrlId: string): Promise<ShortUrl | undefined> {
    const document = await database.findOne({
      shortUrlId,
      deletedAt: {
        $exists: false,
      },
    });

    if (document) {
      document.deletedAt = new Date();

      await database.updateOne(
        {
          shortUrlId,
          deletedAt: {
            $exists: false,
          },
        },
        document,
      );

      return shortUrlDatabaseAdapter.repositoryToModel(document);
    }

    return undefined;
  }

  async findById(shortUrlId: string): Promise<ShortUrl | undefined> {
    const document = await database.findOne({ shortUrlId });

    if (document) {
      return shortUrlDatabaseAdapter.repositoryToModel(document);
    }

    return undefined;
  }

  async findByCode(code: string): Promise<ShortUrl | undefined> {
    const document = await database.findOne({
      code,
      deletedAt: {
        $exists: false,
      },
    });

    if (document) {
      return shortUrlDatabaseAdapter.repositoryToModel(document);
    }

    return undefined;
  }

  async findAll(): Promise<Array<ShortUrl>> {
    const documents = await database.find();

    if (documents) {
      return documents.map((document) =>
        shortUrlDatabaseAdapter.repositoryToModel(document),
      );
    }

    return new Array<ShortUrl>();
  }

}

const shortUrlRepository = new ShortUrlRepository();
export default shortUrlRepository;
