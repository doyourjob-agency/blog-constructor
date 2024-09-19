"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColoredText = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
const { subBlocks: { ContentBase }, components: { ImageProps }, common: { BlockBaseProps }, } = page_constructor_1.validators;
const BackgroundProps = {
    type: 'object',
    additionalProperties: false,
    properties: {
        image: ImageProps,
        color: {
            type: 'string',
        },
        altText: {
            type: 'string',
            contentType: 'text',
        },
    },
};
exports.ColoredText = {
    [common_1.BlockType.ColoredText]: {
        type: 'object',
        additionalProperties: false,
        required: ['text'],
        properties: Object.assign(Object.assign(Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase), ContentBase), { background: BackgroundProps }),
    },
};