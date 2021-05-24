declare module '@ioc:Romch007/Cache' {
  import { RedisConnectionsList } from '@ioc:Adonis/Addons/Redis'

  export interface CacheProvidersList {}

  export type CacheDrivers = {
    redis: {
      config: RedisConfig
      implementation: null
    }
    memcached: {
      config: null
      implementation: null
    }
  }

  export interface CacheDriverContract {
    get(key: string, defaultValue: any): Promise<any>
    put(key: string, data: any, ttl: number): Promise<void>
  }

  export type CacheConfig = {
    provider: keyof CacheProvidersList
    providers: { [P in keyof CacheProvidersList]: CacheProvidersList[P]['config'] }
  }

  export type RedisConfig = {
    connection: keyof RedisConnectionsList
  }

  export interface RedisDriverContract extends CacheDriverContract {}
}
