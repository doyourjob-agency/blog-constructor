import React from 'react';
import {render, screen} from '@testing-library/react';

import {PADDING_SIZES} from '../../../../test-utils/constants';
import {testPaddingBottom, testPaddingTop} from '../../../../test-utils/shared/common';
import {DocumentsProps} from '../../../models/blocks';
import {PaddingSize} from '../../../models/paddings';
import {Documents} from '../Documents';

const documentsData = {
    items: [
        {
            name: 'Document 1',
            link: 'https://example.com/doc1.pdf',
        },
        {
            name: 'Document 2',
            link: 'https://example.com/doc2.pdf',
        },
    ],
    qa: 'documents-block',
};

describe('Documents', () => {
    test('renders all document items with correct links', () => {
        render(<Documents {...documentsData} />);
        documentsData.items.forEach((item) => {
            const link = screen.getByRole('link', {name: item.name});
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', item.link);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noreferrer');
        });
    });

    test('renders with "withSticky" class modifier', () => {
        render(<Documents {...documentsData} withSticky qa={documentsData.qa} />);
        const wrapper = screen.getByTestId(documentsData.qa); // используем data-testid
        expect(wrapper).toHaveClass('bc-documents__content_withSticky');
    });

    test.each(PADDING_SIZES)('renders with given "%s" paddingTop', (size: PaddingSize) => {
        testPaddingTop<DocumentsProps>({
            component: Documents,
            props: {...documentsData, paddingTop: size},
            options: {qaId: documentsData.qa},
        });
    });

    test.each(PADDING_SIZES)('renders with given "%s" paddingBottom', (size: PaddingSize) => {
        testPaddingBottom<DocumentsProps>({
            component: Documents,
            props: {...documentsData, paddingBottom: size},
            options: {qaId: documentsData.qa},
        });
    });
});
