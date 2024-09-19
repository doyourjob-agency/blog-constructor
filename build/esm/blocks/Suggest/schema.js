import { validators } from '@gravity-ui/page-constructor';
const { common: { BlockBaseProps }, } = validators;
import { BlockType } from '../../models/common';
import { BlogBlockBase } from '../../schema/common';
export const Suggest = {
    [BlockType.Suggest]: {
        type: 'object',
        additionalProperties: false,
        properties: Object.assign(Object.assign({}, BlockBaseProps), BlogBlockBase),
    },
};