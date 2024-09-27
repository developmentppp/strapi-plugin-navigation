"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheStatus = void 0;
const getCacheStatus = async ({ strapi, }) => {
    const cachePlugin = strapi.plugin("rest-cache");
    const hasCachePlugin = !!cachePlugin;
    const pluginStore = strapi.store({
        type: "plugin",
        name: "navigation",
    });
    const config = await pluginStore.get({
        key: "config",
    });
    return hasCachePlugin
        ? { hasCachePlugin, enabled: config.isCacheEnabled }
        : { hasCachePlugin, enabled: false };
};
exports.getCacheStatus = getCacheStatus;
//# sourceMappingURL=utils.js.map