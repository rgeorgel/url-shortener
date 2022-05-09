import 'module-alias/register';
import 'reflect-metadata';
import { clearDB, connectDB } from '@test/database/database';
import shortUrlService from '@app/application/services/shortUrl.service';
import { ShortUrlInterface } from '@app/application/interfaces';
import { ShortUrl } from '@app/application/models';

process.env.TEST_SUITE = 'suite-test-short-url';
connectDB();

describe('ShortUrl Test', () => {
  describe('Try to list all when dont exist any record in the DB', () => {
    it ('Needs to return an empty array', async () => {
      await clearDB();
      const shortUrls = await shortUrlService.list();

      expect(shortUrls.length).toBe(0);
    });
  });

  describe('List / Get', () => {
    let shortUrl1: ShortUrlInterface;
    let shortUrl2: ShortUrlInterface;

    beforeAll(async () => {
      await clearDB();
      shortUrl1 = await shortUrlService.create('http://someUrl1.com');
      shortUrl2 = await shortUrlService.create('http://someUrl2.com');
      await shortUrlService.create('http://someUrl3.com');
    });

    it('List all shortUrls', async () => {
      const shortUrls = await shortUrlService.list();

      // need to return all shortUrl created on the beforeAll
      expect(shortUrls.length).toBe(3);
    });

    it('Get shortUrl by ID', async () => {
      const shortUrl = await shortUrlService.get(shortUrl1.shortUrlId!);

      expect(shortUrl?.shortUrlId).toBe(shortUrl1.shortUrlId);
      expect(shortUrl?.code).toBe(shortUrl1.code);
    });

    it('Try to get shortUrl with a wrong ID', async () => {
      const shortUrl = await shortUrlService.get(shortUrl1.shortUrlId + '1');

      expect(shortUrl).not.toBeDefined();
    });

    it('Get shortUrl by Code', async () => {
      const shortUrl = await shortUrlService.getByCode(shortUrl2.code!);

      expect(shortUrl?.shortUrlId).toBe(shortUrl2.shortUrlId);
      expect(shortUrl?.code).toBe(shortUrl2.code);
    });

    it('Try to get shortUrl with a wrong Code', async () => {
      const shortUrl = await shortUrlService.getByCode(shortUrl2.code + '1234');

      expect(shortUrl).not.toBeDefined();
    });
  });

  describe('Create', () => {
    afterAll(async () => {
      await clearDB();
    });

    it('Create ShortUrl successfully', async () => {
      const originalUrl = 'http://someUrl.com';
      const shortUrl = await shortUrlService.create(originalUrl);

      expect(shortUrl.shortUrlId).toBeDefined();
      expect(shortUrl.code).toBeDefined();
      expect(shortUrl.originalUrl).toBe(originalUrl);
    });

    it('Try to create ShortUrl with a empty URL', async () => {
      const expectedError = new Error('OriginalUrl is required.');

      try {
        const originalUrl = '';
        await shortUrlService.create(originalUrl);

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('Update', () => {
    afterAll(async () => {
      await clearDB();
    });

    it('Update ShortUrl successfully', async () => {
      const originalUrl = 'http://someUrl.com';
      const shortUrl = await shortUrlService.create(originalUrl);

      expect(shortUrl.shortUrlId).toBeDefined();
      expect(shortUrl.code).toBeDefined();
      expect(shortUrl.originalUrl).toBe(originalUrl);

      const newUrl = 'https://google.com';
      shortUrl.originalUrl = newUrl;
      const updatedShortUrl = await shortUrlService.update(shortUrl);

      expect(updatedShortUrl.shortUrlId).toBeDefined();
      expect(updatedShortUrl.shortUrlId).toBe(shortUrl.shortUrlId);
      expect(updatedShortUrl.code).toBeDefined();
      expect(updatedShortUrl.code).toBe(shortUrl.code);
      expect(updatedShortUrl.originalUrl).toBe(newUrl);
    });

    it('Update ShortUrl with an ID that do not exist', async () => {
      const newId = 'NEW_ID';

      const shortUrl = new ShortUrl({
        originalUrl: 'https://google.com',
        shortUrlId: newId,
        code: 'Code',
      });
      const updatedShortUrl = await shortUrlService.update(shortUrl);

      expect(updatedShortUrl.shortUrlId).toBeDefined();
      expect(updatedShortUrl.code).toBeDefined();
    });

    it('Try to update ShortUrl with a empty URL', async () => {
      const expectedError = new Error('OriginalUrl is required.');

      try {
        const originalUrl = 'http://someUrl.com';
        const shortUrl = await shortUrlService.create(originalUrl);

        expect(shortUrl.shortUrlId).toBeDefined();
        expect(shortUrl.code).toBeDefined();
        expect(shortUrl.originalUrl).toBe(originalUrl);

        shortUrl.originalUrl = '';
        await shortUrlService.update(shortUrl);

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('Try to update ShortUrl with a different Code', async () => {
      const expectedError = new Error('Invalid code.');

      try {
        const originalUrl = 'http://someUrl.com';
        const shortUrl = await shortUrlService.create(originalUrl);

        expect(shortUrl.shortUrlId).toBeDefined();
        expect(shortUrl.code).toBeDefined();
        expect(shortUrl.originalUrl).toBe(originalUrl);

        shortUrl.code = 'OTHER-CODE';
        await shortUrlService.update(shortUrl);

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });
  });

  describe('Delete', () => {
    afterAll(async () => {
      await clearDB();
    });

    it('Delete ShortUrl successfully', async () => {
      const originalUrl = 'http://someUrl.com';
      const shortUrl = await shortUrlService.create(originalUrl);

      expect(shortUrl.shortUrlId).toBeDefined();
      expect(shortUrl.code).toBeDefined();
      expect(shortUrl.originalUrl).toBe(originalUrl);

      const deletedModel = await shortUrlService.delete(shortUrl.shortUrlId!);
      expect(deletedModel?.deletedAt).toBeDefined();
    });

    it('Try to delete ShortUrl without ID', async () => {
      const expectedError = new Error('ShortUrlId is required.');

      try {
        await shortUrlService.delete('');

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('Try to delete ShortUrl with an Id that do not exist', async () => {
      const deletedModel = await shortUrlService.delete('THIS_ID_IS_NOT_REGISTERED');
      expect(deletedModel).not.toBeDefined();
    });
  });
});

