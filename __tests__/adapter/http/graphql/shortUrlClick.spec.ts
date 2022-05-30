import { ShortUrlClickAdapter } from "@app/adapters/http/graphql/shortUrlClick.adapter";
import { ShortUrlClick } from "@app/application/models";


describe('ShortUrlClick Adapter Test', () => {
  it('Convert data from Model to Graphql', async () => {
    const result = ShortUrlClickAdapter.toGraphql(new ShortUrlClick({
      shortUrlClickId: 'df65c2bf-56a7-4c05-b330-2309839550d6',
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      createdAt: new Date('2022-05-09T04:17:46.977Z')
    }));

    expect(result).toEqual({
      shortUrlClickId: 'df65c2bf-56a7-4c05-b330-2309839550d6',
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
    });
  });

  it('Convert data from Graphql to Model', async () => {
    const result = ShortUrlClickAdapter.toModel({
      shortUrlClickId: 'df65c2bf-56a7-4c05-b330-2309839550d6',
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
    });

    const expectedResult = {
      shortUrlClickId: 'df65c2bf-56a7-4c05-b330-2309839550d6',
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
    };

    expect(result).toEqual(expectedResult);
  });

  it('Try to convert undefined data to Graphql', async () => {
    const expectedResult = undefined;

    const result = ShortUrlClickAdapter.toGraphql(undefined);

    expect(result).toEqual(expectedResult);
  });
});
