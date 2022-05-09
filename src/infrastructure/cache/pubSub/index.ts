import Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import config from '@app/config';

class RedisServer {
  private readonly options: {
    port: number | undefined;
    host: string | undefined;
    retryStrategy: (times: number) => number;
  };

  constructor() {
    this.options = {
      host: config.redis.host,
      port: config.redis.port,
      retryStrategy: (times: number) => Math.max(times * 100, 3000),
    };
  }

  init(): RedisPubSub {
    return new RedisPubSub({
      publisher: new Redis(this.options),
      subscriber: new Redis(this.options),
    });
  }
}

const redis = new RedisServer().init();
export default redis;
