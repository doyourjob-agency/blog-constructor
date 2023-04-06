import React, {useContext} from 'react';

import {Button} from '@gravity-ui/uikit';

import {LocaleContext} from '../../../contexts/LocaleContext';
import {block} from '../../../utils/cn';
import {getBlogPath} from '../../../utils/common';
import {ArrowType, PaginatorItemProps} from '../types';

import '../Paginator.scss';

const b = block('paginator');

export const PaginatorItem = ({
    dataKey,
    mods,
    content,
    onClick,
    loading = false,
}: PaginatorItemProps) => {
    const {locale} = useContext(LocaleContext);
    const urlPath = getBlogPath(locale?.pathPrefix || '');

    const itemKey = Number(dataKey) > 0 ? Number(dataKey) : (dataKey as ArrowType);
    const navTag = itemKey > 0 ? `${mods.type || 'page'}=${itemKey}` : itemKey;
    const navigationLink = `${urlPath || ''}?${navTag}`;

    return (
        <a
            href={navigationLink}
            className={b('link', mods)}
            onClick={(event) => event.preventDefault()}
        >
            <Button
                view="flat"
                size="xl"
                className={b('item', mods)}
                onClick={() => onClick?.(itemKey)}
                loading={loading && Boolean(mods.active)}
            >
                {content}
            </Button>
        </a>
    );
};
