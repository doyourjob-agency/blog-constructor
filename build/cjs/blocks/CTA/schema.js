"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTA = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
const { subBlocks: { ContentBase }, common: { BlockBaseProps }, } = page_constructor_1.validators;
exports.CTA = {
    [common_1.BlockType.CTA]: {
        type: 'object',
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), { items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['title', 'links'],
                    properties: Object.assign({}, ContentBase),
                },
            } }),
    },
};