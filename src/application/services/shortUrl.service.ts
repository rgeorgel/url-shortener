import { v4 as uuid } from 'uuid';
import { ShortUrl } from "@app/application/models";
import shortLink from '@app/infrastructure/shortLink';
import { ShortUrlRepositoryInterface } from '@app/application/interfaces/database/shortUrlRepository.interface';
import shortUrlRepository from '@app/infrastructure/database/shortUrl.repository';
import config from '@app/config';

export class ShortUrlService {
  repository: ShortUrlRepositoryInterface;

  constructor(repository?: ShortUrlRepositoryInterface) {
    this.repository = repository || shortUrlRepository;
  }

  public async create(originalUrl: string): Promise<ShortUrl> {
    const shortUrl = new ShortUrl({
      shortUrlId: uuid(),
      originalUrl,
      code: shortLink.generate(),
      url: config.server.domainUrl,
    });

    shortUrl.isValid();

    return this.repository.create(shortUrl);
  }

  public async update(shortUrl: ShortUrl): Promise<ShortUrl> {
    shortUrl.isValid();

    const existentShortUrl = await this.get(shortUrl.shortUrlId!);

    if (!existentShortUrl) {
      return this.create(shortUrl.originalUrl);
    }

    if (existentShortUrl.code !== shortUrl.code) {
      throw new Error('Invalid code.');
    }

    shortUrl.url = config.server.domainUrl;

    return this.repository.update(shortUrl);
  }

  public async delete(shortUrlId: string): Promise<ShortUrl | undefined> {
    if (!shortUrlId) {
      throw new Error('ShortUrlId is required.');
    }

    return this.repository.delete(shortUrlId);
  }

  public get(id: string): Promise<ShortUrl | undefined> {
    return this.repository.findById(id);
  }

  public getByCode(code: string): Promise<ShortUrl | undefined> {
    return this.repository.findByCode(code);
  }

  public list(): Promise<Array<ShortUrl>> {
    return this.repository.findAll();
  }
}

const shortUrlService = new ShortUrlService();
export default shortUrlService;
