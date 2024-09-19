const sizeTypes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
export const filteredItem = (itemsSchema) => (Object.assign(Object.assign({}, itemsSchema), { type: 'object', properties: Object.assign({ when: {
            type: 'string',
        } }, itemsSchema.properties) }));
export const BlogBlockBase = {
    paddingTop: {
        type: 'string',
        enum: sizeTypes,
    },
    paddingBottom: {
        type: 'string',
        enum: sizeTypes,
    },
    fullWidth: {
        type: 'boolean',
    },
    column: {
        type: 'string',
        enum: ['left', 'right'],
    },
    qa: {
        type: 'string',
    },
};