"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = __importDefault(require("./bootstrap"));
const config_1 = __importDefault(require("./config"));
const content_types_1 = __importDefault(require("./content-types"));
const controllers_1 = __importDefault(require("./controllers"));
const destroy_1 = __importDefault(require("./destroy"));
const register_1 = __importDefault(require("./register"));
const routes_1 = __importDefault(require("./routes"));
const services_1 = __importDefault(require("./services"));
exports.default = {
    bootstrap: bootstrap_1.default,
    config: config_1.default,
    contentTypes: content_types_1.default,
    controllers: controllers_1.default,
    destroy: destroy_1.default,
    middlewares: {},
    policies: {},
    register: register_1.default,
    routes: routes_1.default,
    services: services_1.default,
};
//# sourceMappingURL=index.js.map