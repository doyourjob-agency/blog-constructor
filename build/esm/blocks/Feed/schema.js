import { validators } from '@gravity-ui/page-constructor';
const { common: { TitleProps, BlockBaseProps }, } = validators;
import { BlockType } from '../../models/common';
export const Feed = {
    [BlockType.Feed]: {
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