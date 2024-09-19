"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YFM = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const { common: { BlockBaseProps }, } = page_constructor_1.validators;
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
exports.YFM = {
    [common_1.BlockType.YFM]: {
        type: 'object',
        additionalProperties: false,
        required: ['text'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), { text: {
                type: 'string',
                contentType: 'yfm',
            } }),
    },
};