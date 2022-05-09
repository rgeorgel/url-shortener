import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ShortUrl } from '@app/infrastructure/http/graphql/models/shortUrl.graphql';
import { ShortUrl as ShortUrlModel } from '@app/application/models/index';
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

  @Mutation(() => ShortUrl)
  async createShortUrl(
    @Arg('originalUrl') originalUrl: string,
  ): Promise<ShortUrl> {
    const shortUrl = await shortUrlService.create(originalUrl);
    return ShortUrlAdapter.toGraphql(shortUrl)!;
  }

  @Mutation(() => ShortUrl)
  async updateShortUrl(
    @Arg('originalUrl') originalUrl: string,
    @Arg('code') code: string,
    @Arg('shortUrlId') shortUrlId: string,
  ): Promise<ShortUrl> {
    const shortUrl = new ShortUrlModel({
      originalUrl,
      code,
      shortUrlId
    });
    const response = await shortUrlService.update(shortUrl);
    return ShortUrlAdapter.toGraphql(response)!;
  }

}