"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceEnhancers_1 = require("../serviceEnhancers");
describe("Cache", () => {
    describe("Enhancers", () => {
        describe("addCacheConfigFields()", () => {
            it("should return config fields", async () => {
                const cachePlugin = {};
                const pluginStore = { get: jest.fn() };
                const strapi = {
                    plugin() {
                        return cachePlugin;
                    },
                    store() {
                        return pluginStore;
                    },
                };
                const previousConfig = {
                    foo: "bar",
                };
                pluginStore.get.mockReturnValue({ isCacheEnabled: true });
                const result = await (0, serviceEnhancers_1.addCacheConfigFields)({ strapi, previousConfig });
                expect(result).toMatchInlineSnapshot(`
          Object {
            "foo": "bar",
            "isCacheEnabled": true,
            "isCachePluginEnabled": true,
          }
        `);
            });
        });
    });
});
//# sourceMappingURL=serviceEnhancers.test.js.map