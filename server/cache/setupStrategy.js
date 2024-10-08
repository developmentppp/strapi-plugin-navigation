"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCacheStrategy = void 0;
const router_1 = __importDefault(require("@koa/router"));
const client_1 = __importDefault(require("../routes/client"));
const utils_1 = require("./utils");
const setupCacheStrategy = async ({ strapi, }) => {
    const { enabled, hasCachePlugin } = await (0, utils_1.getCacheStatus)({ strapi });
    if (hasCachePlugin && enabled) {
        const cachePlugin = strapi.plugin("rest-cache");
        const createCacheMiddleware = cachePlugin?.middleware("recv");
        if (!createCacheMiddleware) {
            console.warn("Cache middleware not present in cache plugin. Stopping");
            console.warn("Notify strapi-navigation-plugin-team");
            return;
        }
        const pluginOption = strapi.config.get("plugin.rest-cache");
        const router = new router_1.default();
        const buildPathFrom = (route) => `/api/${route.info.pluginName}${route.path}`;
        const buildFrom = (route) => ({
            maxAge: pluginOption.strategy?.maxAge ?? 6 * 60 * 1000,
            path: buildPathFrom(route),
            method: "GET",
            paramNames: ["idOrSlug", "childUIKey"],
            keys: { useHeaders: [], useQueryParams: true },
            hitpass: false,
        });
        client_1.default.routes.forEach((route) => {
            router.get(buildPathFrom(route), createCacheMiddleware({ cacheRouteConfig: buildFrom(route) }, { strapi }));
        });
        strapi.server.router.use(router.routes());
    }
};
exports.setupCacheStrategy = setupCacheStrategy;
//# sourceMappingURL=setupStrategy.js.map