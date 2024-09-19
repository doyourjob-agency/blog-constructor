"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
const { blocks: { HeaderProperties }, common: { BlockBaseProps }, } = page_constructor_1.validators;
exports.Header = {
    [common_1.BlockType.Header]: {
        type: 'object',
        additionalProperties: false,
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), HeaderProperties),
    },
};