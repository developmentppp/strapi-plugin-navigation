import { IStrapi } from "strapi-typed";
type GetCacheStatusInput = {
    strapi: IStrapi;
};
type CacheStatus = {
    hasCachePlugin: boolean;
    enabled: boolean;
};
export declare const getCacheStatus: ({ strapi, }: GetCacheStatusInput) => Promise<CacheStatus>;
export {};
//# sourceMappingURL=utils.d.ts.map