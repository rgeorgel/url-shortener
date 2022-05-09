import { ShortUrlAdapter } from "@app/adapters/http/graphql/shortUrl.adapter";
import { ShortUrl } from "@app/application/models";


describe('Submission Adapter Test', () => {
  it('Convert data from Model to Graphql', async () => {
    const result = ShortUrlAdapter.toGraphql(new ShortUrl({
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      url: 'http://localhost:3030/',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
      updatedAt: new Date('2022-05-09T04:17:46.977Z')
    }));

    expect(result).toEqual({
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      url: 'http://localhost:3030/',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
      updatedAt: new Date('2022-05-09T04:17:46.977Z'),
    });
  });

  it('Convert data from Graphql to Model', async () => {
    const result = ShortUrlAdapter.toModel({
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      url: 'http://localhost:3030/',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
      updatedAt: new Date('2022-05-09T04:17:46.977Z')
    });

    const expectedResult = {
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      url: 'http://localhost:3030/',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
      updatedAt: new Date('2022-05-09T04:17:46.977Z')
    };

    expect(result).toEqual(expectedResult);
  });

  it('Try to convert undefined data to Graphql', async () => {
    const expectedResult = undefined;

    const result = ShortUrlAdapter.toGraphql(undefined);

    expect(result).toEqual(expectedResult);
  });
});
