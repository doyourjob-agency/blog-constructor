import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { useAnalytics } from '@gravity-ui/page-constructor';
import { Icon } from '@gravity-ui/uikit';
import { FeedHeader } from '../../components/FeedHeader/FeedHeader';
import { Posts } from '../../components/Posts/Posts';
import { PostsError } from '../../components/PostsError/PostsError';
import { DefaultGoalIds } from '../../constants';
import { FeedContext } from '../../contexts/FeedContext';
import { RouterContext } from '../../contexts/RouterContext';
import { AnalyticsCounter } from '../../counters/utils';
import { DefaultEventNames } from '../../models/common';
import { getFeedQueryParams, prepareAnalyticsEvent, scrollOnPageChange } from '../../utils/common';
import { DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE } from '../constants';
import { ActionTypes, reducer } from './reducer';
const CONTAINER_ID = 'blog-cards';
const PAGE_QUERY = 'page';
const FIRST_PAGE = 1;
export const Feed = ({ image }) => {
    var _a;
    const { posts, totalCount, tags, services, pinnedPost, getPosts, pageCountForShowSupportButtons, } = useContext(FeedContext);
    const router = useContext(RouterContext);
    const [isRunHandleLoad, setIsRunHandleLoad] = useState(false);
    const handleAnalytics = useAnalytics(DefaultEventNames.ShowMore);
    const additionalAnalyticsEvent = prepareAnalyticsEvent({
        name: DefaultGoalIds.showMore,
        counter: AnalyticsCounter.CrossSite,
    });
    const [{ errorLoad, errorShowMore, isFetching, isShowMoreVisible, lastLoadedCount, postCountOnPage, postsOnPage, pinnedPostOnPage, currentPage, queryParams, }, dispatch,] = useReducer(reducer, {
        errorLoad: false,
        errorShowMore: false,
        isFetching: false,
        isShowMoreVisible: true,
        lastLoadedCount: (posts === null || posts === void 0 ? void 0 : posts.length) || 0,
        postCountOnPage: totalCount || 0,
        postsOnPage: posts,
        pinnedPostOnPage: pinnedPost,
        currentPage: ((_a = router === null || router === void 0 ? void 0 : router.query) === null || _a === void 0 ? void 0 : _a.page) ? Number(router.query.page) : DEFAULT_PAGE,
        queryParams: router.query || {},
    });
    const perPageInQuery = (queryParams === null || queryParams === void 0 ? void 0 : queryParams.perPage)
        ? Number(queryParams.perPage)
        : DEFAULT_ROWS_PER_PAGE;
    const pageChange = (value) => {
        dispatch({ type: ActionTypes.PageChange, payload: value });
    };
    const setIsFetching = (value) => {
        dispatch({ type: ActionTypes.SetIsFetching, payload: value });
    };
    const setErrorLoad = (value) => {
        dispatch({ type: ActionTypes.SetErrorLoad, payload: value });
    };
    const handleChangeQueryParams = useCallback((value) => {
        dispatch({ type: ActionTypes.QueryParamsChange, payload: value });
        const hasFirstPageQuery = Object.keys(value).some((queryKey) => queryKey === PAGE_QUERY && value[queryKey] === FIRST_PAGE);
        const result = hasFirstPageQuery
            ? Object.assign(Object.assign({}, value), { [PAGE_QUERY]: null }) : Object.assign({}, value);
        router.updateQueryCallback(result);
    }, [router]);
    const fetchData = useCallback(async ({ page, query }) => {
        if (query && getPosts) {
            const queryParamsForRequest = getFeedQueryParams(Object.assign(Object.assign({}, queryParams), query), page);
            const data = await getPosts(queryParamsForRequest);
            return data;
        }
        else {
            throw new Error('cant get request');
        }
    }, [getPosts, queryParams]);
    const updateQueryBeforeHandleLoad = useCallback(async (payload) => {
        if (isRunHandleLoad)
            return;
        const page = Number(payload.page || DEFAULT_PAGE);
        const query = Object.assign(Object.assign({}, payload), { page });
        dispatch({ type: ActionTypes.QueryParamsChange, payload: query });
        try {
            setErrorLoad(false);
            setIsFetching(true);
            if (getPosts) {
                const queryParamsForRequest = getFeedQueryParams(query, page);
                const fetchedData = await getPosts(queryParamsForRequest);
                if (fetchedData) {
                    dispatch({
                        type: ActionTypes.SetPosts,
                        payload: {
                            posts: fetchedData.posts,
                            pinnedPost: fetchedData.pinnedPost,
                            count: fetchedData.count,
                            page,
                        },
                    });
                }
            }
            else {
                throw new Error('cant get request');
            }
        }
        catch (err) {
            setErrorLoad(true);
        }
        scrollOnPageChange(CONTAINER_ID);
        setIsFetching(false);
    }, [isRunHandleLoad, getPosts]);
    useEffect(() => {
        var _a;
        (_a = router.setFunctionUpdateQueryBeforeHandleLoad) === null || _a === void 0 ? void 0 : _a.call(router, updateQueryBeforeHandleLoad);
    }, [router, updateQueryBeforeHandleLoad]);
    const handleLoad = useCallback(async ({ page, query }) => {
        setIsRunHandleLoad(true);
        const pageNumber = Number(page || queryParams.page || DEFAULT_PAGE);
        handleChangeQueryParams(query);
        try {
            setErrorLoad(false);
            setIsFetching(true);
            const fetchedData = await fetchData({ page: pageNumber, query });
            if (fetchedData) {
                dispatch({
                    type: ActionTypes.SetPosts,
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
        scrollOnPageChange(CONTAINER_ID);
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
        handleAnalytics(additionalAnalyticsEvent);
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
                    type: ActionTypes.SetShowMore,
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
            dispatch({ type: ActionTypes.SetErrorShowMore, payload: true });
        }
        setIsFetching(false);
    };
    const handleOnErrorReload = useCallback(() => {
        handleLoad({ page: currentPage, query: queryParams });
    }, [currentPage, handleLoad, queryParams]);
    useEffect(() => {
        const loadedPostsCount = currentPage * perPageInQuery;
        dispatch({
            type: ActionTypes.SetIsShowMoreVisible,
            payload: loadedPostsCount < postCountOnPage,
        });
    }, [currentPage, lastLoadedCount, perPageInQuery, postCountOnPage]);
    const serviceItems = useMemo(() => services === null || services === void 0 ? void 0 : services.map((service) => ({
        content: service.name,
        value: `${service.id}`,
    })), [services]);
    const tagItems = useMemo(() => tags === null || tags === void 0 ? void 0 : tags.map((tag) => ({
        content: tag.name,
        value: tag.slug,
        icon: tag.icon && React.createElement(Icon, { data: tag.icon }),
    })), [tags]);
    return (React.createElement("div", null,
        React.createElement(FeedHeader, { verticalOffset: "s", tags: tagItems, services: serviceItems, handleLoadData: handleLoad, queryParams: queryParams, background: {
                fullWidth: true,
                url: image,
                disableCompress: true,
            } }),
        errorLoad ? (React.createElement(PostsError, { onButtonClick: handleOnErrorReload })) : (React.createElement(Posts, { containerId: CONTAINER_ID, currentPage: currentPage, isShowMoreVisible: isShowMoreVisible, errorShowMore: errorShowMore, postCountOnPage: postCountOnPage, perPageInQuery: perPageInQuery, handleShowMore: handleShowMore, handlePageChange: handlePageChange, postsOnPage: postsOnPage, pinnedPostOnPage: pinnedPostOnPage, isFetching: isFetching, queryParams: queryParams, pageCountForShowSupportButtons: pageCountForShowSupportButtons }))));
};