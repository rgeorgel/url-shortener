import 'module-alias/register';
import 'reflect-metadata';
import { connectDB } from '@test/database/database';
import * as packageJson from '@base/package.json';

import healthService from '@app/application/services/health.service';

process.env.TEST_SUITE = 'suite-test-health';

describe('Health Test', () => {
  it('Request the health check without connection to the DB', async () => {
    const expectedResult = false;
    const health = await healthService.get();

    expect(health.database).toBe(expectedResult);
  });


  it('Request the health check with connection to the DB', async () => {
    await connectDB();

    setTimeout(() => {
      const expectedResult = true;

      const health = healthService.get();

      expect(health.database).toBe(expectedResult);

      // done()
    }, 2000);
  });

  it('Get the right version of the application', async () => {
    const health = await healthService.get();

    expect(health.version).toBe(packageJson.version);
  });
});
