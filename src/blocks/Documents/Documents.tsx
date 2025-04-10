import React from 'react';

import {DocumentsProps} from '../../models/blocks';
import {PaddingsDirections} from '../../models/paddings';
import {Wrapper} from '../../components/Wrapper/Wrapper';
import {Document} from '../../icons/Document';
import {block} from '../../utils/cn';

import './Documents.scss';

const b = block('documents');

export const Documents = (props: DocumentsProps) => {
    const {paddingTop, paddingBottom, qa, withSticky, items} = props;
    return (
        <Wrapper
            paddings={{
                [PaddingsDirections.top]: paddingTop,
                [PaddingsDirections.bottom]: paddingBottom,
            }}
            className={b('content', {withSticky})}
            qa={qa}
            data-testid={qa}
        >
            <ul className={b('list')}>
                {items.map((item, index) => (
                    <li key={String(index)}>
                        <a className={b('item')} href={item.link} target="_blank" rel="noreferrer">
                            <Document />
                            <span className={b('item-name')}>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};
