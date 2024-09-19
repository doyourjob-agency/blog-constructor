import { validators } from '@gravity-ui/page-constructor';
const { common: { BlockBaseProps, ChildrenProps }, } = validators;
import { BlockType } from '../../models/common';
import { BlogBlockBase } from '../../schema/common';
export const Layout = {
    [BlockType.Layout]: {
        type: 'object',
        additionalProperties: false,
        required: ['children'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), BlogBlockBase), { children: ChildrenProps, mobileOrder: {
                type: 'string',
                enum: ['reverse', 'straight'],
            } }),
    },
};