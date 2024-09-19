"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateConfig = void 0;
const generateConfig = (config) => {
    return Object.keys(config).reduce((acc, blockKey) => (Object.assign(Object.assign({}, acc), { blockKey: {
            blockKey: config[blockKey],
        } })), {});
};
exports.generateConfig = generateConfig;