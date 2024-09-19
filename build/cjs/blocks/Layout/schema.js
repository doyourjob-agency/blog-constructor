"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const { common: { BlockBaseProps, ChildrenProps }, } = page_constructor_1.validators;
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
exports.Layout = {
    [common_1.BlockType.Layout]: {
        type: 'object',
        additionalProperties: false,
        required: ['children'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), { children: ChildrenProps, mobileOrder: {
                type: 'string',
                enum: ['reverse', 'straight'],
            } }),
    },
};