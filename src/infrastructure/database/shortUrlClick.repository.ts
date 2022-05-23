import shortUrlClickDatabaseAdapter from "@app/adapters/database/shortUrlClick.adapter";
import { ShortUrlClickRepositoryInterface } from "@app/application/interfaces/database/shortUrlClickRepository.interface";
import { ShortUrlClick } from "@app/application/models";
import database from '@app/infrastructure/database/models/shortUrlClick.mongoose';
import utils from '@app/infrastructure/helpers/util';


export class ShortUrlClickRepository implements ShortUrlClickRepositoryInterface {
  async create(shortUrlClick: ShortUrlClick): Promise<void> {
    await database.create(
      utils.removeUndefinedProps(shortUrlClick),
    );

    return;
  }

  async findById(shortUrlClickId: string): Promise<ShortUrlClick | undefined> {
    const document = await database.findOne({ shortUrlClickId });

    if (document) {
      return shortUrlClickDatabaseAdapter.repositoryToModel(document);
    }

    return undefined;
  }

  async listByCode(code: string): Promise<Array<ShortUrlClick>> {
    const documents = await database.find({ code });

    return documents.map((document) => shortUrlClickDatabaseAdapter.repositoryToModel(document));
  }
}

const shortUrlClickRepository = new ShortUrlClickRepository();
export default shortUrlClickRepository;

