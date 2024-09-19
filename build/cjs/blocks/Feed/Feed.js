"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
/**
 * @deprecated Metrika will be deleted after launch of analyticsEvents
 */
const uikit_1 = require("@gravity-ui/uikit");
const FeedHeader_1 = require("../../components/FeedHeader/FeedHeader");
const Posts_1 = require("../../components/Posts/Posts");
const PostsError_1 = require("../../components/PostsError/PostsError");
const constants_1 = require("../../constants");
const FeedContext_1 = require("../../contexts/FeedContext");
const RouterContext_1 = require("../../contexts/RouterContext");
/**
 * @deprecated Metrika will be deleted after launch of analyticsEvents
 */
const metrika_1 = tslib_1.__importDefault(require("../../counters/metrika"));
const utils_1 = require("../../counters/utils");
const common_1 = require("../../models/common");
const common_2 = require("../../utils/common");
const constants_2 = require("../constants");
const reducer_1 = require("./reducer");
const CONTAINER_ID = 'blog-cards';
const PAGE_QUERY = 'page';
const FIRST_PAGE = 1;
const Feed = ({ image }) => {
    var _a;
    const { posts, totalCount, tags, services, pinnedPost, getPosts, pageCountForShowSupportButtons, } = (0, react_1.useContext)(FeedContext_1.FeedContext);
    const router = (0, react_1.useContext)(RouterContext_1.RouterContext);
    const [isRunHandleLoad, setIsRunHandleLoad] = (0, react_1.useState)(false);
    const handleAnalytics = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.ShowMore);
    const [{ errorLoad, errorShowMore, isFetching, isShowMoreVisible, lastLoadedCount, postCountOnPage, postsOnPage, pinnedPostOnPage, currentPage, queryParams, }, dispatch,] = (0, react_1.useReducer)(reducer_1.reducer, {
        errorLoad: false,
        errorShowMore: false,
        isFetching: false,
        isShowMoreVisible: true,
        lastLoadedCount: (posts === null || posts === void 0 ? void 0 : posts.length) || 0,
        postCountOnPage: totalCount || 0,
        postsOnPage: posts,
        pinnedPostOnPage: pinnedPost,
        currentPage: ((_a = router === null || router === void 0 ? void 0 : router.query) === null || _a === void 0 ? void 0 : _a.page) ? Number(router.query.page) : constants_2.DEFAULT_PAGE,
        queryParams: router.query || {},
    });
    const perPageInQuery = (queryParams === null || queryParams === void 0 ? void 0 : queryParams.perPage)
        ? Number(queryParams.perPage)
        : constants_2.DEFAULT_ROWS_PER_PAGE;
    const pageChange = (value) => {
        dispatch({ type: reducer_1.ActionTypes.PageChange, payload: value });
    };
    const setIsFetching = (value) => {
        dispatch({ type: reducer_1.ActionTypes.SetIsFetching, payload: value });
    };
    const setErrorLoad = (value) => {
        dispatch({ type: reducer_1.ActionTypes.SetErrorLoad, payload: value });
    };
    const handleChangeQueryParams = (0, react_1.useCallback)((value) => {
        setIsRunHandleLoad(true);
        dispatch({ type: reducer_1.ActionTypes.QueryParamsChange, payload: value });
        const hasFirstPageQuery = Object.keys(value).some((queryKey) => queryKey === PAGE_QUERY && value[queryKey] === FIRST_PAGE);
        const result = hasFirstPageQuery
            ? Object.assign(Object.assign({}, value), { [PAGE_QUERY]: null }) : Object.assign({}, value);
        router.updateQueryCallback(result);
    }, [router]);
    const fetchData = (0, react_1.useCallback)(async ({ page, query }) => {
        if (query && getPosts) {
            const queryParamsForRequest = (0, common_2.getFeedQueryParams)(Object.assign(Object.assign({}, queryParams), query), page);
            const data = await getPosts(queryParamsForRequest);
            return data;
        }
        else {
            throw new Error('cant get request');
        }
    }, [getPosts, queryParams]);
    const updateQueryBeforeHandleLoad = (0, react_1.useCallback)(async (payload) => {
        if (isRunHandleLoad)
            return;
        const query = Object.assign({ page: constants_2.DEFAULT_PAGE }, payload);
        dispatch({ type: reducer_1.ActionTypes.QueryParamsChange, payload: query });
        try {
            setErrorLoad(false);
            setIsFetching(true);
            const fetchedData = await fetchData({ page: constants_2.DEFAULT_PAGE, query });
            if (fetchedData) {
                dispatch({
                    type: reducer_1.ActionTypes.SetPosts,
                    payload: {
                        posts: fetchedData.posts,
                        pinnedPost: fetchedData.pinnedPost,
                        count: fetchedData.count,
                        page: constants_2.DEFAULT_PAGE,
                    },
                });
            }
        }
        catch (err) {
            setErrorLoad(true);
        }
        (0, common_2.scrollOnPageChange)(CONTAINER_ID);
        setIsFetching(false);
    }, [isRunHandleLoad, fetchData]);
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = router.setFunctionUpdateQueryBeforeHandleLoad) === null || _a === void 0 ? void 0 : _a.call(router, updateQueryBeforeHandleLoad);
    }, [router, updateQueryBeforeHandleLoad]);
    const handleLoad = (0, react_1.useCallback)(async ({ page, query }) => {
        const pageNumber = Number(page || queryParams.page || constants_2.DEFAULT_PAGE);
        handleChangeQueryParams(query);
        try {
            setErrorLoad(false);
            setIsFetching(true);
            const fetchedData = await fetchData({ page: pageNumber, query });
            if (fetchedData) {
                dispatch({
                    type: reducer_1.ActionTypes.SetPosts,
                    payload: {
                        posts: fetchedData.posts,
                        pinnedPost: fetchedData.pinnedPost,
                        count: fetchedData.count,
                        page: pageNumber,
                    },
                });
            }
        }
        catch (err) {
            setErrorLoad(true);
        }
        (0, common_2.scrollOnPageChange)(CONTAINER_ID);
        setIsFetching(false);
    }, [fetchData, handleChangeQueryParams, queryParams]);
    const handlePageChange = async (value) => {
        pageChange(value);
        handleLoad({
            page: value,
            query: Object.assign(Object.assign({}, queryParams), { page: value }),
        });
    };
    const handleShowMore = async () => {
        /**
         * @deprecated Metrika will be deleted after launch of analyticsEvents
         */
        metrika_1.default.reachGoal(utils_1.MetrikaCounter.CrossSite, constants_1.BlogMetrikaGoalIds.showMore);
        handleAnalytics();
        const nextPage = currentPage + 1;
        try {
            setIsFetching(true);
            const fetchedData = await fetchData({
                page: nextPage,
                query: {
                    page: nextPage,
                },
            });
            handleChangeQueryParams({
                page: nextPage,
            });
            if (fetchedData) {
                dispatch({
                    type: reducer_1.ActionTypes.SetShowMore,
                    payload: {
                        posts: (postsOnPage !== null && postsOnPage !== void 0 ? postsOnPage : []).concat(fetchedData.posts),
                        count: fetchedData.count,
                        currentPage: nextPage,
                        lastLoadedCount: fetchedData.posts.length,
                    },
                });
            }
        }
        catch (err) {
            dispatch({ type: reducer_1.ActionTypes.SetErrorShowMore, payload: true });
        }
        setIsFetching(false);
    };
    const handleOnErrorReload = (0, react_1.useCallback)(() => {
        handleLoad({ page: currentPage, query: queryParams });
    }, [currentPage, handleLoad, queryParams]);
    (0, react_1.useEffect)(() => {
        const loadedPostsCount = currentPage * perPageInQuery;
        dispatch({
            type: reducer_1.ActionTypes.SetIsShowMoreVisible,
            payload: loadedPostsCount < postCountOnPage,
        });
    }, [currentPage, lastLoadedCount, perPageInQuery, postCountOnPage]);
    const serviceItems = (0, react_1.useMemo)(() => services === null || services === void 0 ? void 0 : services.map((service) => ({
        content: service.name,
        value: `${service.id}`,
    })), [services]);
    const tagItems = (0, react_1.useMemo)(() => tags === null || tags === void 0 ? void 0 : tags.map((tag) => ({
        content: tag.name,
        value: tag.slug,
        icon: tag.icon && react_1.default.createElement(uikit_1.Icon, { data: tag.icon }),
    })), [tags]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(FeedHeader_1.FeedHeader, { verticalOffset: "s", tags: tagItems, services: serviceItems, handleLoadData: handleLoad, queryParams: queryParams, background: {
                fullWidth: true,
                url: image,
                disableCompress: true,
            } }),
        errorLoad ? (react_1.default.createElement(PostsError_1.PostsError, { onButtonClick: handleOnErrorReload })) : (react_1.default.createElement(Posts_1.Posts, { containerId: CONTAINER_ID, currentPage: currentPage, isShowMoreVisible: isShowMoreVisible, errorShowMore: errorShowMore, postCountOnPage: postCountOnPage, perPageInQuery: perPageInQuery, handleShowMore: handleShowMore, handlePageChange: handlePageChange, postsOnPage: postsOnPage, pinnedPostOnPage: pinnedPostOnPage, isFetching: isFetching, queryParams: queryParams, pageCountForShowSupportButtons: pageCountForShowSupportButtons }))));
};
exports.Feed = Feed;