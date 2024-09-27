"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCacheConfigFields = void 0;
const utils_1 = require("./utils");
const addCacheConfigFields = async ({ previousConfig, strapi, }) => {
    const { enabled, hasCachePlugin } = await (0, utils_1.getCacheStatus)({
        strapi,
    });
    return {
        ...previousConfig,
        isCacheEnabled: enabled,
        isCachePluginEnabled: hasCachePlugin,
    };
};
exports.addCacheConfigFields = addCacheConfigFields;
//# sourceMappingURL=serviceEnhancers.js.map