import {validators} from '@doyourjob/gravity-ui-page-constructor';

const {
    common: {BlockBaseProps},
} = validators;

import {BlockType} from '../../models/common';
import {BlogBlockBase} from '../../schema/common';

export const Documents = {
    [BlockType.Documents]: {
        type: 'object',
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BlockBaseProps,
            ...BlogBlockBase,
            withSticky: {
                type: 'boolean',
                default: false,
            },
            items: {
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
            },
        },
    },
};
