import { Health } from '@app/application/models';
import packageFile from '@base/package.json';
import healthRepository from '@app/infrastructure/database/health.repository';

export class HealthService {
  private checkDatabase(): boolean {
    let isConnected = false;
    try {
      isConnected = healthRepository.isConnected();
    } finally {
      return isConnected;
    }
  }

  public get() {
    const health: Health = new Health(
      true,
      this.checkDatabase(),
      packageFile.version,
    );

    return health;
  }
}

const healthService = new HealthService();

export default healthService;
