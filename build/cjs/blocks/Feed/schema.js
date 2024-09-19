"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const { common: { TitleProps, BlockBaseProps }, } = page_constructor_1.validators;
const common_1 = require("../../models/common");
exports.Feed = {
    [common_1.BlockType.Feed]: {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, BlockBaseProps), { title: TitleProps, image: {
                type: 'string',
            }, description: {
                type: 'string',
                contentType: 'text',
            }, size: {
                type: 'string',
                enum: ['s', 'm'],
            } }),
    },
};