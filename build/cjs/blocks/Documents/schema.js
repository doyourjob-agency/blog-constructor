"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const { common: { BlockBaseProps }, } = page_constructor_1.validators;
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
exports.Documents = {
    [common_1.BlockType.Documents]: {
        type: 'object',
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), { withSticky: {
                type: 'boolean',
                default: false,
            }, items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['name', 'link'],
                    properties: {
                        name: {
                            type: 'string',
                        },
                        link: {
                            type: 'string',
                        },
                    },
                },
            } }),
    },
};