import { ShortUrlClick } from "@app/application/models";

export interface ShortUrlClickRepositoryInterface {
  create(shortUrlClick: ShortUrlClick): Promise<void>;
  findById(shortUrlClickId: string): Promise<ShortUrlClick | undefined>;
  listByCode(code: string): Promise<Array<ShortUrlClick>>;
}
