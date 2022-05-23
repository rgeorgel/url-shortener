import { ShortUrlClickAdapter } from '@app/adapters/http/graphql/shortUrlClick.adapter';
import shortUrlClickService from '@app/application/services/shortUrlClick.service';
import { ShortUrlClick } from '@app/infrastructure/http/graphql/models/shortUrlClick.graphql'
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver(() => ShortUrlClick)
export default class {
  @Query(() => [ShortUrlClick], { nullable: true })
  async listShortUrlClickByCode(
    @Arg('code') code: string,
  ): Promise<Array<ShortUrlClick>> {
    const shortUrlClicks = await shortUrlClickService.listByCode(code);
    return shortUrlClicks.map((click) => ShortUrlClickAdapter.toGraphql(click)!);
  }

  @Query(() => ShortUrlClick, { nullable: true })
  async getShortUrlById(
    @Arg('shortUrlClickId') shortUrlClickId: string,
  ): Promise<ShortUrlClick | undefined> {
    const shortUrl = await shortUrlClickService.get(shortUrlClickId);
    return ShortUrlClickAdapter.toGraphql(shortUrl);
  }
}
