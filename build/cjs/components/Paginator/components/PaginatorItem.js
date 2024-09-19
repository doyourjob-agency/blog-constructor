"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatorItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const LocaleContext_1 = require("../../../contexts/LocaleContext");
const SettingsContext_1 = require("../../../contexts/SettingsContext");
const cn_1 = require("../../../utils/cn");
const common_1 = require("../../../utils/common");
const b = (0, cn_1.block)('paginator');
const PaginatorItem = ({ dataKey, mods, content, queryParams, onClick, loading = false, index, }) => {
    const { locale } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const { addNavigationLinkForPages, getBlogPath = common_1.getBlogPath } = (0, react_1.useContext)(SettingsContext_1.SettingsContext);
    const urlPath = getBlogPath((locale === null || locale === void 0 ? void 0 : locale.pathPrefix) || '');
    const itemKey = Number(dataKey) > 0 ? Number(dataKey) : dataKey;
    const navigationLink = (0, react_1.useMemo)(() => {
        const queryString = Object.entries(Object.assign(Object.assign({}, (index > 1 ? { page: index } : undefined)), queryParams))
            .map(([param, value]) => `${param}=${value}`)
            .join('&');
        return queryString ? `${urlPath}?${queryString}` : urlPath;
    }, [queryParams, index, urlPath]);
    const handleClick = (0, react_1.useCallback)((event) => {
        if (addNavigationLinkForPages && (event.metaKey || event.ctrlKey)) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(itemKey);
    }, [addNavigationLinkForPages, itemKey, onClick]);
    return (react_1.default.createElement(uikit_1.Button, { view: "flat", size: "xl", className: b('item', mods), onClick: handleClick, href: addNavigationLinkForPages ? navigationLink : undefined, loading: loading && Boolean(mods.active) }, content));
};
exports.PaginatorItem = PaginatorItem;