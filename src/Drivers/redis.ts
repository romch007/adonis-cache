import Redis from '@ioc:Adonis/Addons/Redis'
import { RedisConfig, RedisDriverContract } from '@ioc:Romch007/Cache'

export class RedisDriver implements RedisDriverContract {
  constructor(private config: RedisConfig) {}

  public get(key: string, defaultValue: any): Promise<any> {
    return Redis.connection(this.config.connection).get(key) ?? defaultValue
  }

  public put(key: string, data: any, ttl: number): Promise<void> {}
}
