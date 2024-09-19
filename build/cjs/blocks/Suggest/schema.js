"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggest = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
const { common: { BlockBaseProps }, } = page_constructor_1.validators;
const common_1 = require("../../models/common");
const common_2 = require("../../schema/common");
exports.Suggest = {
    [common_1.BlockType.Suggest]: {
        type: 'object',
        additionalProperties: false,
        properties: Object.assign(Object.assign({}, BlockBaseProps), common_2.BlogBlockBase),
    },
};