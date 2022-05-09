import { Arg, Query, Resolver } from 'type-graphql';
import { ShortUrl } from '@app/infrastructure/http/graphql/models/shortUrl.graphql';
import shortUrlService from '@app/application/services/shortUrl.service';
import { ShortUrlAdapter } from '@app/adapters/http/graphql/shortUrl.adapter';

@Resolver(() => ShortUrl)
export default class {
  @Query(() => ShortUrl, { nullable: true })
  async getShortUrlById(
    @Arg('shortUrlId') shortUrlId: string,
  ): Promise<ShortUrl | undefined> {
    const shortUrl = await shortUrlService.get(shortUrlId);
    return ShortUrlAdapter.toGraphql(shortUrl);
  }

  @Query(() => ShortUrl, { nullable: true })
  async getShortUrlByCode(
    @Arg('code') code: string,
  ): Promise<ShortUrl | undefined> {
    const shortUrl = await shortUrlService.getByCode(code);
    return ShortUrlAdapter.toGraphql(shortUrl);
  }

}