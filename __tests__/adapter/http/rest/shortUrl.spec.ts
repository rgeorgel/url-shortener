import { ShortUrlAdapter } from "@app/adapters/http/rest/shortUrl.adapter";
import { ShortUrl } from "@app/application/models";


describe('Submission Adapter Test', () => {
  it('Convert data from Model to Rest', async () => {
    const result = ShortUrlAdapter.toRest(new ShortUrl({
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      url: 'http://localhost:3030/',
      createdAt: new Date('2022-05-09T04:17:46.977Z'),
      updatedAt: new Date('2022-05-09T04:17:46.977Z')
    }));

    expect(result).toEqual({
      id: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      longUrl: 'http://google.com',
      url: 'http://localhost:3030/',
    });
  });

  it('Convert data from Graphql to Model', async () => {
    const result = ShortUrlAdapter.toModel({
      id: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      longUrl: 'http://google.com',
      url: 'http://localhost:3030/',
    });

    const expectedResult = {
      shortUrlId: 'df65c2bf-56a7-4c05-b330-2309839550d7',
      code: 'Dda358dq',
      originalUrl: 'http://google.com',
      url: 'http://localhost:3030/',
    };

    expect(result).toEqual(expectedResult);
  });
});
