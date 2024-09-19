"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const { common: { BlockBaseProps }, } = page_constructor_1.validators;
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
exports.Author = {
    [common_1.BlockType.Author]: {
        type: 'object',
        additionalProperties: false,
        required: ['authorId'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), { authorId: {
                type: 'number',
            } }),
    },
};