export const generateConfig = (config) => {
    return Object.keys(config).reduce((acc, blockKey) => (Object.assign(Object.assign({}, acc), { blockKey: {
            blockKey: config[blockKey],
        } })), {});
};