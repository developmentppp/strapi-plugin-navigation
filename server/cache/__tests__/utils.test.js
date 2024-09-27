"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
describe("Cache", () => {
    describe("Utils", () => {
        describe("getCacheStatus()", () => {
            it("should mark cache as disabled if plugin is not installed", async () => {
                const cachePlugin = null;
                const pluginStore = { get: jest.fn() };
                const strapi = {
                    plugin() {
                        return cachePlugin;
                    },
                    store() {
                        return pluginStore;
                    },
                };
                const result = await (0, utils_1.getCacheStatus)({ strapi });
                expect(result).toMatchInlineSnapshot(`
          Object {
            "enabled": false,
            "hasCachePlugin": false,
          }
        `);
            });
            it("should mark cache as enabled if it is enabled in config", async () => {
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
                pluginStore.get.mockReturnValue({ isCacheEnabled: true });
                const result = await (0, utils_1.getCacheStatus)({ strapi });
                expect(result).toMatchInlineSnapshot(`
          Object {
            "enabled": true,
            "hasCachePlugin": true,
          }
        `);
            });
            it("should mark cache as enabled if it is enabled in config", async () => {
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
                pluginStore.get.mockReturnValue({ isCacheEnabled: false });
                const result = await (0, utils_1.getCacheStatus)({ strapi });
                expect(result).toMatchInlineSnapshot(`
          Object {
            "enabled": false,
            "hasCachePlugin": true,
          }
        `);
            });
        });
    });
});
//# sourceMappingURL=utils.test.js.map