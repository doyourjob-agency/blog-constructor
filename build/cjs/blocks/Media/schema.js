"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
const { common: { BlockBaseProps, MediaProps }, } = page_constructor_1.validators;
exports.Media = {
    [common_1.BlockType.Media]: {
        type: 'object',
        additionalProperties: false,
        properties: Object.assign(Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), MediaProps), { text: {
                type: 'string',
                contentType: 'text',
            } }),
    },
};