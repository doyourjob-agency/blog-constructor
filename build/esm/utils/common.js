import { __rest } from "tslib";
import { format, parse } from 'url';
import camelCase from 'lodash/camelCase';
import debounce from 'lodash/debounce';
import flatten from 'lodash/flatten';
import memoize from 'lodash/memoize';
import { CONTENT_DEFAULT_COL_SIZES, CONTENT_DEFAULT_SIZE, CONTENT_DEFAULT_THEME, DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE, } from '../blocks/constants';
import { Keyset, i18n } from '../i18n';
import { AnalyticsCounter } from '../counters/utils';
const QA_ATTRIBUTES_KEYS = ['container', 'content', 'wrapper', 'image', 'button'];
export function getAbsolutePath(router, url) {
    if (!router || !router.pathname) {
        return url !== null && url !== void 0 ? url : '';
    }
    const parsed = parse(url || router.as || '');
    return format(Object.assign(Object.assign({}, parsed), { protocol: parsed.protocol || 'https', hostname: parsed.hostname || router.hostname, pathname: parsed.pathname || router.pathname }));
}
export const getPageSearchParams = (query = {}) => {
    const searchParams = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        searchParams.set(key, String(value));
    });
    return searchParams;
};
export const scrollToHash = (hash, browser) => {
    if (!hash) {
        return;
    }
    const element = document.getElementById(hash);
    if (!element) {
        return;
    }
    setTimeout(() => element.scrollIntoView({ behavior: browser === 'Yandex' ? 'auto' : 'smooth' }), 0);
};
export const getTags = memoize((tags, blogPath) => {
    return tags.map((_a) => {
        var { slug } = _a, tag = __rest(_a, ["slug"]);
        const queryParams = new URLSearchParams();
        queryParams.set('tags', slug);
        return Object.assign(Object.assign({}, tag), { id: slug, url: `${blogPath}?${queryParams}` });
    });
});
const stub = (postId) => postId;
export const postLikeStatus = debounce((postId, hasUserLike) => {
    (hasUserLike ? stub : stub)(postId);
}, 300);
export const updateContentSizes = (_a) => {
    var { size, colSizes, theme } = _a, contentData = __rest(_a, ["size", "colSizes", "theme"]);
    return (Object.assign(Object.assign({}, contentData), { size: size || CONTENT_DEFAULT_SIZE, colSizes: colSizes || CONTENT_DEFAULT_COL_SIZES, theme: theme || CONTENT_DEFAULT_THEME }));
};
export const getBlogPath = (pathPrefix) => {
    const prefix = pathPrefix ? `/${pathPrefix}` : '';
    return `${prefix}/blog`;
};
export const getBreadcrumbs = ({ tags, blogPath }) => {
    const breadcrumbs = {
        items: [{ text: i18n(Keyset.TitleBreadcrumbs), url: blogPath }],
        theme: 'light',
    };
    if (tags === null || tags === void 0 ? void 0 : tags.length) {
        const localizedTags = getTags(tags, blogPath);
        const tag = localizedTags[0];
        // @ts-ignore todo fix
        breadcrumbs.items.push({ text: tag.name, url: tag.url });
    }
    return breadcrumbs;
};
const getArrayOfEvents = (events) => {
    if (!events) {
        return [];
    }
    if (Array.isArray(events)) {
        return events;
    }
    return [events];
};
export const getMergedAnalyticsEvents = (analyticEvents, existringEvents) => {
    const eventsAsArray = getArrayOfEvents(analyticEvents);
    const existingAsArray = getArrayOfEvents(existringEvents);
    return eventsAsArray.concat(existingAsArray);
};
export const getFeedQueryParams = (queryString, pageNumber) => {
    const queryParams = getPageSearchParams(queryString);
    const tags = queryParams.get('tags') || undefined;
    const page = pageNumber || Number(queryParams.get('page') || DEFAULT_PAGE);
    const perPage = Number(queryParams.get('perPage') || DEFAULT_ROWS_PER_PAGE);
    const savedOnly = queryParams.get('savedOnly') === 'true';
    const search = queryParams.get('search') || undefined;
    const serviceIds = queryParams.get('services') || undefined;
    return { tags, page, perPage, savedOnly, search, services: serviceIds };
};
export const scrollOnPageChange = (containerId) => {
    var _a;
    const cardsContainerEl = document.getElementById(containerId);
    const y = ((_a = cardsContainerEl === null || cardsContainerEl === void 0 ? void 0 : cardsContainerEl.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.y) || 0;
    if (y < 0) {
        scrollToHash(containerId);
    }
};
export const getQaAttributes = (qa, ...customKeys) => {
    const attributes = {};
    if (qa) {
        const keys = QA_ATTRIBUTES_KEYS.concat(flatten(customKeys));
        keys.forEach((key) => {
            attributes[camelCase(key)] = `${qa}-${key}`;
        });
        attributes.default = qa;
    }
    return attributes;
};
export const prepareAnalyticsEvent = ({ name, counter = AnalyticsCounter.Main, options = {}, }) => (Object.assign(Object.assign({}, options), { name, counters: {
        include: [counter],
    } }));