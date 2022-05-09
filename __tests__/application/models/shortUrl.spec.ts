import 'module-alias/register';
import 'reflect-metadata';
import { ShortUrl } from '@app/application/models';

describe('ShortUrl Model', () => {
  describe('ShortUrl Validation', () => {
    it('check if shortUrlId exist', () => {
      const expectedError = new Error('ShortUrlId is required.');

      try {
        const model = new ShortUrl({
          originalUrl: 'original url',
          code: 'Code',
        });

        model.isValid();

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('check if code exist', () => {
      const expectedError = new Error('Code is required.');

      try {
        const model = new ShortUrl({
          shortUrlId: '1234',
          originalUrl: 'original url',
          code: '',
        });

        model.isValid();

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('check if originalUrl exist', () => {
      const expectedError = new Error('OriginalUrl is required.');

      try {
        const model = new ShortUrl({
          shortUrlId: '1234',
          originalUrl: '',
          code: 'C0d3',
        });

        model.isValid();

        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(expectedError);
      }
    });

    it('When the shortUrl has originalUrl, Id and code need to return true', () => {

      try {
        const model = new ShortUrl({
          shortUrlId: '1234',
          originalUrl: 'https://google.com',
          code: 'C0d3',
        });

        const result = model.isValid();

        expect(true).toBe(result);
      } catch (error) {
        expect(true).toBe(false);
      }
    });
  });
});
