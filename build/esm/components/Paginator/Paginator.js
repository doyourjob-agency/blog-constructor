import { __rest } from "tslib";
import React, { useEffect, useMemo, useState } from 'react';
import { useAnalytics } from '@gravity-ui/page-constructor';
import { DefaultGoalIds } from '../../constants';
import { AnalyticsCounter } from '../../counters/utils';
import { DefaultEventNames } from '../../models/common';
import { block } from '../../utils/cn';
import { NavigationButton } from './components/NavigationButton';
import { PaginatorItem } from './components/PaginatorItem';
import { ArrowType } from './types';
import { getPageConfigs, getPagesCount } from './utils';
import { prepareAnalyticsEvent } from '../../utils/common';
import _ from 'lodash';
import './Paginator.css';
const b = block('paginator');
const DEFAULT_PAGE_COUNT_FOR_SHOW_SUPPORT_BUTTONS = 6;
export const Paginator = ({ itemsPerPage, totalItems, maxPages, page, className, onPageChange, queryParams, pageCountForShowSupportButtons = DEFAULT_PAGE_COUNT_FOR_SHOW_SUPPORT_BUTTONS, }) => {
    const [pagesCount, setPagesCount] = useState(getPagesCount({ itemsPerPage, totalItems, maxPages }));
    const nonPagedQuery = useMemo(() => {
        return _.omit(queryParams, ['page']);
    }, [queryParams]);
    useEffect(() => {
        const count = getPagesCount({ itemsPerPage, totalItems, maxPages });
        setPagesCount(count);
    }, [itemsPerPage, totalItems, maxPages]);
    const handlePageChange = (pageIndex) => onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    const isShowSupportButtons = useMemo(() => pagesCount > pageCountForShowSupportButtons, [pageCountForShowSupportButtons, pagesCount]);
    const handleAnalyticsHome = useAnalytics(DefaultEventNames.PaginatorHome);
    const handleAnalyticsNext = useAnalytics(DefaultEventNames.PaginatorNext);
    const handleAnalyticsPage = useAnalytics(DefaultEventNames.PaginatorPage);
    if (pagesCount <= 1) {
        return null;
    }
    const handleArrowClick = (type) => {
        let newPage = page;
        if (type === 'prev' && page > 1) {
            const event = prepareAnalyticsEvent({
                name: DefaultGoalIds.home,
                counter: AnalyticsCounter.CrossSite,
            });
            handleAnalyticsHome(event);
            newPage = 1;
        }
        else if (type === 'next' && page < pagesCount) {
            const event = prepareAnalyticsEvent({
                name: DefaultGoalIds.next,
                counter: AnalyticsCounter.CrossSite,
            });
            handleAnalyticsNext(event);
            newPage = page + 1;
        }
        if (newPage !== page) {
            handlePageChange(newPage);
        }
    };
    const handlePageClick = (index) => {
        if (index !== page && typeof index === 'number') {
            const event = prepareAnalyticsEvent({
                name: DefaultGoalIds.page,
                counter: AnalyticsCounter.CrossSite,
            });
            handleAnalyticsPage(event, { page: String(index) });
            handlePageChange(index);
        }
    };
    const paginatorItems = getPageConfigs({
        page,
        pagesCount,
        queryParams: nonPagedQuery,
        handlePageClick,
    });
    if (page > 1 && isShowSupportButtons) {
        paginatorItems.unshift({
            key: ArrowType.Prev,
            dataKey: ArrowType.Prev,
            queryParams: nonPagedQuery,
            mods: { type: ArrowType.Prev },
            onClick: handleArrowClick,
            index: 0,
            content: React.createElement(NavigationButton, { arrowType: ArrowType.Prev }),
        });
    }
    if (page < pagesCount && isShowSupportButtons) {
        paginatorItems.push({
            key: ArrowType.Next,
            queryParams: nonPagedQuery,
            dataKey: ArrowType.Next,
            mods: { type: ArrowType.Next },
            index: page + 1,
            onClick: handleArrowClick,
            content: React.createElement(NavigationButton, { arrowType: ArrowType.Next }),
        });
    }
    const renderPaginatorItem = (item) => {
        const { key } = item, rest = __rest(item, ["key"]);
        return React.createElement(PaginatorItem, Object.assign({ key: `page_${key}` }, rest));
    };
    return (React.createElement("div", { className: b('pagination') },
        page > 1 && (React.createElement("div", { className: b('pagination-block') },
            React.createElement("ul", { className: b(null, className) }, paginatorItems.slice(0, 1).map(renderPaginatorItem)))),
        React.createElement("div", { className: b('pagination-block') },
            React.createElement("ul", { className: b(null, className) }, paginatorItems
                .slice(page > 1 ? 1 : 0, page < pagesCount ? paginatorItems.length - 1 : paginatorItems.length)
                .map(renderPaginatorItem))),
        page < pagesCount && (React.createElement("div", { className: b('pagination-block') },
            React.createElement("ul", { className: b(null, className) }, paginatorItems
                .slice(paginatorItems.length - 1, paginatorItems.length)
                .map(renderPaginatorItem))))));
};