import {validators} from '@doyourjob/gravity-ui-page-constructor';

const {
    common: {BlockBaseProps},
} = validators;

import {BlockType} from '../../models/common';
import {BlogBlockBase} from '../../schema/common';

export const YFM = {
    [BlockType.YFM]: {
        type: 'object',
        additionalProperties: false,
        required: ['text'],
        properties: {
            ...BlockBaseProps,
            ...BlogBlockBase,
            text: {
                type: 'string',
                contentType: 'yfm',
            },
        },
    },
};
