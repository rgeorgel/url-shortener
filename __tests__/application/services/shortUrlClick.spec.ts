import 'module-alias/register';
import 'reflect-metadata';
import { clearDB, connectDB } from '@test/database/database';
import shortUrlClickService from '@app/application/services/shortUrlClick.service';
import { ShortUrlClick } from '@app/application/models';

process.env.TEST_SUITE = 'suite-test-short-url-click';
connectDB();

describe('ShortUrlClick Test', () => {
  describe('List / Get', () => {
    let shortUrlClick1: ShortUrlClick;

    beforeAll(async () => {
      await clearDB();

      shortUrlClick1 = new ShortUrlClick({
        code: 'some-code',
        originalUrl: 'originalUrl',
        shortUrlId: 'shortUrlId',
        shortUrlClickId: 'shortUrlClick1',
      });

      await shortUrlClickService.create(shortUrlClick1!);
    });

    it('Get shortUrlClick by ID', async () => {
      const shortUrl = await shortUrlClickService.get(shortUrlClick1.shortUrlClickId!);

      expect(shortUrl).toBeDefined();
      expect(shortUrl?.shortUrlClickId).toBe(shortUrlClick1.shortUrlClickId);
      expect(shortUrl?.shortUrlId).toBe(shortUrlClick1.shortUrlId);
      expect(shortUrl?.code).toBe(shortUrlClick1.code);
    });

    it('List shortUrlClick by Code', async () => {
      await shortUrlClickService.create(new ShortUrlClick({
        code: 'my-code-1',
        originalUrl: 'originalUrl-1',
        shortUrlId: 'shortUrlId',
        shortUrlClickId: '1',
      }));

      await shortUrlClickService.create(new ShortUrlClick({
        code: 'my-code-1',
        originalUrl: 'originalUrl-2',
        shortUrlId: 'shortUrlId',
        shortUrlClickId: '2',
      }));

      const shortUrlClicksPrev = await shortUrlClickService.listByCode('my-code-1');
      expect(shortUrlClicksPrev.length).toBe(2);
    });

    it('List shortUrlClick by Code that not exist need to return and empty array', async () => {
      const shortUrlClicksPrev = await shortUrlClickService.listByCode('some-other-id');
      expect(shortUrlClicksPrev.length).toBe(0);
    });

  });

  describe('Create', () => {
    afterAll(async () => {
      await clearDB();
    });

    it('Create ShortUrlClick successfully', async () => {
      const shortUrlClicksPrev = await shortUrlClickService.listByCode('code123');
      expect(shortUrlClicksPrev.length).toBe(0);

      const base = new ShortUrlClick({
        code: 'code123',
        originalUrl: 'originalUrl',
        shortUrlId: 'shortUrlId',
        shortUrlClickId: 'shortUrlClickId',
      });

      await shortUrlClickService.create(base);

      const shortUrlClicks = await shortUrlClickService.listByCode('code123');
      expect(shortUrlClicks.length).toBe(1);

      const shortUrlClick = shortUrlClicks[0];

      expect(shortUrlClick).toBeDefined();
      expect(shortUrlClick.shortUrlClickId).toBeDefined();
      expect(shortUrlClick.shortUrlClickId).toBe('shortUrlClickId');
      expect(shortUrlClick.shortUrlId).toBe('shortUrlId');
      expect(shortUrlClick.code).toBe('code123');
      expect(shortUrlClick.originalUrl).toBe('originalUrl');
    });

    it('The ShortUrlClick id need to be generated automatically if not informed', async () => {
      const shortUrlClicksPrev = await shortUrlClickService.listByCode('code321');
      expect(shortUrlClicksPrev.length).toBe(0);

      const base = new ShortUrlClick({
        code: 'code321',
        originalUrl: 'originalUrl',
        shortUrlId: 'shortUrlId',
      });

      await shortUrlClickService.create(base);

      const shortUrlClicks = await shortUrlClickService.listByCode('code321');
      expect(shortUrlClicks.length).toBe(1);

      const shortUrlClick = shortUrlClicks[0];

      expect(shortUrlClick).toBeDefined();
      expect(shortUrlClick.shortUrlClickId).toBeDefined();
      expect(shortUrlClick.shortUrlId).toBe('shortUrlId');
      expect(shortUrlClick.code).toBe('code321');
      expect(shortUrlClick.originalUrl).toBe('originalUrl');
    });
  });
});
