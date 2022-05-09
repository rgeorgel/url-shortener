import { ShortUrl } from "@app/application/models";

export interface ShortUrlRepositoryInterface {
  create(shortUrl: ShortUrl): Promise<ShortUrl>;
  update(shortUrl: ShortUrl): Promise<ShortUrl>;
  delete(shortUrlId: string): Promise<ShortUrl | undefined>;
  findById(shortUrlId: string): Promise<ShortUrl | undefined>;
  findByCode(code: string): Promise<ShortUrl | undefined>;
  findAll(): Promise<Array<ShortUrl>>;
}
