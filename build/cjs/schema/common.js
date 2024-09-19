"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogBlockBase = exports.filteredItem = void 0;
const sizeTypes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
const filteredItem = (itemsSchema) => (Object.assign(Object.assign({}, itemsSchema), { type: 'object', properties: Object.assign({ when: {
            type: 'string',
        } }, itemsSchema.properties) }));
exports.filteredItem = filteredItem;
exports.BlogBlockBase = {
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