import shortUrlClickRepository from "@app/infrastructure/database/shortUrlClick.repository";
import { ShortUrlClickRepositoryInterface } from "@app/application/interfaces/database/shortUrlClickRepository.interface";
import { ShortUrlClick } from "../models";

export class ShortUrlClickService {
  repository: ShortUrlClickRepositoryInterface;

  constructor(repository?: ShortUrlClickRepositoryInterface) {
    this.repository = repository || shortUrlClickRepository;
  }

  public async create(shortUrlClick: ShortUrlClick): Promise<void> {
    shortUrlClick.isValid();

    await this.repository.create(shortUrlClick);
  }

  public get(id: string): Promise<ShortUrlClick | undefined> {
    return this.repository.findById(id);
  }

  public listByCode(code: string): Promise<Array<ShortUrlClick>> {
    return this.repository.listByCode(code);
  }
}

const shortUrlClickService = new ShortUrlClickService();
export default shortUrlClickService;
