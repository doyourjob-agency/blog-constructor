import { validators } from '@gravity-ui/page-constructor';
const { common: { BlockBaseProps }, } = validators;
import { BlockType } from '../../models/common';
import { BlogBlockBase } from '../../schema/common';
export const YFM = {
    [BlockType.YFM]: {
        type: 'object',
        additionalProperties: false,
        required: ['text'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), BlogBlockBase), { text: {
                type: 'string',
                contentType: 'yfm',
            } }),
    },
};