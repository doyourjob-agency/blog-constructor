"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
const { subBlocks: { ContentBase }, common: { BlockBaseProps }, } = page_constructor_1.validators;
exports.Banner = {
    [common_1.BlockType.Banner]: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'text', 'image'],
        properties: Object.assign(Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), ContentBase), { color: {
                type: 'string',
            }, image: {
                type: 'string',
            }, imageSize: {
                type: 'string',
                enum: ['s', 'm'],
            } }),
    },
};