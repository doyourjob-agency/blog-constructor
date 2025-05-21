import React from 'react';

import {Block, PageConstructor} from '@doyourjob/gravity-ui-page-constructor';
import type {Meta, StoryFn} from '@storybook/react';

import {blockMockData} from '../../../../.mocks/utils';
import customBlocks from '../../../constructor/blocksMap';
import {PostPageContext} from '../../../contexts/PostPageContext';
import {DocumentsProps} from '../../../models/blocks';
import {BlockType} from '../../../models/common';
import {Documents} from '../Documents';

import documents from '../../../../.mocks/documents.json';

export default {
    title: 'Blocks/Documents',
    component: Documents,
    args: {
        theme: 'light',
        items: documents,
    },
} as Meta;

type DocumentsModel = {
    type: BlockType.Documents;
} & DocumentsProps;

const DefaultTemplate: StoryFn<DocumentsModel> = (args) => (
    <PostPageContext.Provider value={blockMockData}>
        <PageConstructor content={{blocks: [args] as unknown as Block[]}} custom={customBlocks} />
    </PostPageContext.Provider>
);

export const Default = DefaultTemplate.bind({});

Default.args = {
    type: BlockType.Documents,
    items: documents,
    paddingBottom: 'l',
    paddingTop: 'l',
} as DocumentsModel;
