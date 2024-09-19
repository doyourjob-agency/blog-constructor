"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareAnalyticsEvent = exports.getQaAttributes = exports.scrollOnPageChange = exports.getFeedQueryParams = exports.getMergedAnalyticsEvents = exports.getBreadcrumbs = exports.getBlogPath = exports.updateContentSizes = exports.postLikeStatus = exports.getTags = exports.scrollToHash = exports.getPageSearchParams = exports.getAbsolutePath = void 0;
const tslib_1 = require("tslib");
const url_1 = require("url");
const camelCase_1 = tslib_1.__importDefault(require("lodash/camelCase"));
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const flatten_1 = tslib_1.__importDefault(require("lodash/flatten"));
const memoize_1 = tslib_1.__importDefault(require("lodash/memoize"));
const constants_1 = require("../blocks/constants");
const i18n_1 = require("../i18n");
const utils_1 = require("../counters/utils");
const QA_ATTRIBUTES_KEYS = ['container', 'content', 'wrapper', 'image', 'button'];
function getAbsolutePath(router, url) {
    if (!router || !router.pathname) {
        return url !== null && url !== void 0 ? url : '';
    }
    const parsed = (0, url_1.parse)(url || router.as || '');
    return (0, url_1.format)(Object.assign(Object.assign({}, parsed), { protocol: parsed.protocol || 'https', hostname: parsed.hostname || router.hostname, pathname: parsed.pathname || router.pathname }));
}
exports.getAbsolutePath = getAbsolutePath;
const getPageSearchParams = (query = {}) => {
    const searchParams = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        searchParams.set(key, String(value));
    });
    return searchParams;
};
exports.getPageSearchParams = getPageSearchParams;
const scrollToHash = (hash, browser) => {
    if (!hash) {
        return;
    }
    const element = document.getElementById(hash);
    if (!element) {
        return;
    }
    setTimeout(() => element.scrollIntoView({ behavior: browser === 'Yandex' ? 'auto' : 'smooth' }), 0);
};
exports.scrollToHash = scrollToHash;
exports.getTags = (0, memoize_1.default)((tags, blogPath) => {
    return tags.map((_a) => {
        var { slug } = _a, tag = tslib_1.__rest(_a, ["slug"]);
        const queryParams = new URLSearchParams();
        queryParams.set('tags', slug);
        return Object.assign(Object.assign({}, tag), { id: slug, url: `${blogPath}?${queryParams}` });
    });
});
const stub = (postId) => postId;
exports.postLikeStatus = (0, debounce_1.default)((postId, hasUserLike) => {
    (hasUserLike ? stub : stub)(postId);
}, 300);
const updateContentSizes = (_a) => {
    var { size, colSizes, theme } = _a, contentData = tslib_1.__rest(_a, ["size", "colSizes", "theme"]);
    return (Object.assign(Object.assign({}, contentData), { size: size || constants_1.CONTENT_DEFAULT_SIZE, colSizes: colSizes || constants_1.CONTENT_DEFAULT_COL_SIZES, theme: theme || constants_1.CONTENT_DEFAULT_THEME }));
};
exports.updateContentSizes = updateContentSizes;
const getBlogPath = (pathPrefix) => {
    const prefix = pathPrefix ? `/${pathPrefix}` : '';
    return `${prefix}/blog`;
};
exports.getBlogPath = getBlogPath;
const getBreadcrumbs = ({ tags, blogPath }) => {
    const breadcrumbs = {
        items: [{ text: (0, i18n_1.i18n)(i18n_1.Keyset.TitleBreadcrumbs), url: blogPath }],
        theme: 'light',
    };
    if (tags === null || tags === void 0 ? void 0 : tags.length) {
        const localizedTags = (0, exports.getTags)(tags, blogPath);
        const tag = localizedTags[0];
        // @ts-ignore todo fix
        breadcrumbs.items.push({ text: tag.name, url: tag.url });
    }
    return breadcrumbs;
};
exports.getBreadcrumbs = getBreadcrumbs;
const getArrayOfEvents = (events) => {
    if (!events) {
        return [];
    }
    if (Array.isArray(events)) {
        return events;
    }
    return [events];
};
const getMergedAnalyticsEvents = (analyticEvents, existringEvents) => {
    const eventsAsArray = getArrayOfEvents(analyticEvents);
    const existingAsArray = getArrayOfEvents(existringEvents);
    return eventsAsArray.concat(existingAsArray);
};
exports.getMergedAnalyticsEvents = getMergedAnalyticsEvents;
const getFeedQueryParams = (queryString, pageNumber) => {
    const queryParams = (0, exports.getPageSearchParams)(queryString);
    const tags = queryParams.get('tags') || undefined;
    const page = pageNumber || Number(queryParams.get('page') || constants_1.DEFAULT_PAGE);
    const perPage = Number(queryParams.get('perPage') || constants_1.DEFAULT_ROWS_PER_PAGE);
    const savedOnly = queryParams.get('savedOnly') === 'true';
    const search = queryParams.get('search') || undefined;
    const serviceIds = queryParams.get('services') || undefined;
    return { tags, page, perPage, savedOnly, search, services: serviceIds };
};
exports.getFeedQueryParams = getFeedQueryParams;
const scrollOnPageChange = (containerId) => {
    var _a;
    const cardsContainerEl = document.getElementById(containerId);
    const y = ((_a = cardsContainerEl === null || cardsContainerEl === void 0 ? void 0 : cardsContainerEl.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.y) || 0;
    if (y < 0) {
        (0, exports.scrollToHash)(containerId);
    }
};
exports.scrollOnPageChange = scrollOnPageChange;
const getQaAttributes = (qa, ...customKeys) => {
    const attributes = {};
    if (qa) {
        const keys = QA_ATTRIBUTES_KEYS.concat((0, flatten_1.default)(customKeys));
        keys.forEach((key) => {
            attributes[(0, camelCase_1.default)(key)] = `${qa}-${key}`;
        });
        attributes.default = qa;
    }
    return attributes;
};
exports.getQaAttributes = getQaAttributes;
const prepareAnalyticsEvent = ({ name, counter = utils_1.AnalyticsCounter.Main, options = {}, }) => (Object.assign(Object.assign({}, options), { name, counters: {
        include: [counter],
    } }));
exports.prepareAnalyticsEvent = prepareAnalyticsEvent;