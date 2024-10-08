import React, { useCallback, useContext, useMemo } from 'react';
import { Button } from '@gravity-ui/uikit';
import { LocaleContext } from '../../../contexts/LocaleContext';
import { SettingsContext } from '../../../contexts/SettingsContext';
import { block } from '../../../utils/cn';
import { getBlogPath as getDefaultBlogPath } from '../../../utils/common';
import '../Paginator.css';
const b = block('paginator');
export const PaginatorItem = ({ dataKey, mods, content, queryParams, onClick, loading = false, index, }) => {
    const { locale } = useContext(LocaleContext);
    const { addNavigationLinkForPages, getBlogPath = getDefaultBlogPath } = useContext(SettingsContext);
    const urlPath = getBlogPath((locale === null || locale === void 0 ? void 0 : locale.pathPrefix) || '');
    const itemKey = Number(dataKey) > 0 ? Number(dataKey) : dataKey;
    const navigationLink = useMemo(() => {
        const queryString = Object.entries(Object.assign(Object.assign({}, (index > 1 ? { page: index } : undefined)), queryParams))
            .map(([param, value]) => `${param}=${value}`)
            .join('&');
        return queryString ? `${urlPath}?${queryString}` : urlPath;
    }, [queryParams, index, urlPath]);
    const handleClick = useCallback((event) => {
        if (addNavigationLinkForPages && (event.metaKey || event.ctrlKey)) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(itemKey);
    }, [addNavigationLinkForPages, itemKey, onClick]);
    return (React.createElement(Button, { view: "flat", size: "xl", className: b('item', mods), onClick: handleClick, href: addNavigationLinkForPages ? navigationLink : undefined, loading: loading && Boolean(mods.active) }, content));
};