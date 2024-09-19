"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginator = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const constants_1 = require("../../constants");
const utils_1 = require("../../counters/utils");
const common_1 = require("../../models/common");
const cn_1 = require("../../utils/cn");
const NavigationButton_1 = require("./components/NavigationButton");
const PaginatorItem_1 = require("./components/PaginatorItem");
const types_1 = require("./types");
const utils_2 = require("./utils");
const common_2 = require("../../utils/common");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const b = (0, cn_1.block)('paginator');
const DEFAULT_PAGE_COUNT_FOR_SHOW_SUPPORT_BUTTONS = 6;
const Paginator = ({ itemsPerPage, totalItems, maxPages, page, className, onPageChange, queryParams, pageCountForShowSupportButtons = DEFAULT_PAGE_COUNT_FOR_SHOW_SUPPORT_BUTTONS, }) => {
    const [pagesCount, setPagesCount] = (0, react_1.useState)((0, utils_2.getPagesCount)({ itemsPerPage, totalItems, maxPages }));
    const nonPagedQuery = (0, react_1.useMemo)(() => {
        return lodash_1.default.omit(queryParams, ['page']);
    }, [queryParams]);
    (0, react_1.useEffect)(() => {
        const count = (0, utils_2.getPagesCount)({ itemsPerPage, totalItems, maxPages });
        setPagesCount(count);
    }, [itemsPerPage, totalItems, maxPages]);
    const handlePageChange = (pageIndex) => onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    const isShowSupportButtons = (0, react_1.useMemo)(() => pagesCount > pageCountForShowSupportButtons, [pageCountForShowSupportButtons, pagesCount]);
    const handleAnalyticsHome = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.PaginatorHome);
    const handleAnalyticsNext = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.PaginatorNext);
    const handleAnalyticsPage = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.PaginatorPage);
    if (pagesCount <= 1) {
        return null;
    }
    const handleArrowClick = (type) => {
        let newPage = page;
        if (type === 'prev' && page > 1) {
            const event = (0, common_2.prepareAnalyticsEvent)({
                name: constants_1.DefaultGoalIds.home,
                counter: utils_1.AnalyticsCounter.CrossSite,
            });
            handleAnalyticsHome(event);
            newPage = 1;
        }
        else if (type === 'next' && page < pagesCount) {
            const event = (0, common_2.prepareAnalyticsEvent)({
                name: constants_1.DefaultGoalIds.next,
                counter: utils_1.AnalyticsCounter.CrossSite,
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
            const event = (0, common_2.prepareAnalyticsEvent)({
                name: constants_1.DefaultGoalIds.page,
                counter: utils_1.AnalyticsCounter.CrossSite,
            });
            handleAnalyticsPage(event, { page: String(index) });
            handlePageChange(index);
        }
    };
    const paginatorItems = (0, utils_2.getPageConfigs)({
        page,
        pagesCount,
        queryParams: nonPagedQuery,
        handlePageClick,
    });
    if (page > 1 && isShowSupportButtons) {
        paginatorItems.unshift({
            key: types_1.ArrowType.Prev,
            dataKey: types_1.ArrowType.Prev,
            queryParams: nonPagedQuery,
            mods: { type: types_1.ArrowType.Prev },
            onClick: handleArrowClick,
            index: 0,
            content: react_1.default.createElement(NavigationButton_1.NavigationButton, { arrowType: types_1.ArrowType.Prev }),
        });
    }
    if (page < pagesCount && isShowSupportButtons) {
        paginatorItems.push({
            key: types_1.ArrowType.Next,
            queryParams: nonPagedQuery,
            dataKey: types_1.ArrowType.Next,
            mods: { type: types_1.ArrowType.Next },
            index: page + 1,
            onClick: handleArrowClick,
            content: react_1.default.createElement(NavigationButton_1.NavigationButton, { arrowType: types_1.ArrowType.Next }),
        });
    }
    const renderPaginatorItem = (item) => {
        const { key } = item, rest = tslib_1.__rest(item, ["key"]);
        return react_1.default.createElement(PaginatorItem_1.PaginatorItem, Object.assign({ key: `page_${key}` }, rest));
    };
    return (react_1.default.createElement("div", { className: b('pagination') },
        page > 1 && (react_1.default.createElement("div", { className: b('pagination-block') },
            react_1.default.createElement("ul", { className: b(null, className) }, paginatorItems.slice(0, 1).map(renderPaginatorItem)))),
        react_1.default.createElement("div", { className: b('pagination-block') },
            react_1.default.createElement("ul", { className: b(null, className) }, paginatorItems
                .slice(page > 1 ? 1 : 0, page < pagesCount ? paginatorItems.length - 1 : paginatorItems.length)
                .map(renderPaginatorItem))),
        page < pagesCount && (react_1.default.createElement("div", { className: b('pagination-block') },
            react_1.default.createElement("ul", { className: b(null, className) }, paginatorItems
                .slice(paginatorItems.length - 1, paginatorItems.length)
                .map(renderPaginatorItem))))));
};
exports.Paginator = Paginator;