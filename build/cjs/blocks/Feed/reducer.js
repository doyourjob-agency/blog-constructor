"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SetErrorLoad"] = "setErrorLoad";
    ActionTypes["SetErrorShowMore"] = "setErrorShowMore";
    ActionTypes["SetIsShowMoreVisible"] = "setIsShowMoreVisible";
    ActionTypes["SetPosts"] = "setPosts";
    ActionTypes["SetShowMore"] = "setShowMore";
    ActionTypes["SetIsFetching"] = "setIsFetching";
    ActionTypes["PageChange"] = "pageChange";
    ActionTypes["QueryParamsChange"] = "queryParamsChange";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
const reducer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SetIsShowMoreVisible:
            return Object.assign(Object.assign({}, state), { isShowMoreVisible: payload });
        case ActionTypes.SetPosts:
            return Object.assign(Object.assign({}, state), { lastLoadedCount: payload.count, postCountOnPage: payload.count, pinnedPostOnPage: payload.pinnedPost, postsOnPage: payload.posts, currentPage: payload.page });
        case ActionTypes.SetShowMore:
            return Object.assign(Object.assign({}, state), { lastLoadedCount: payload.lastLoadedCount, postCountOnPage: payload.count, currentPage: payload.currentPage, postsOnPage: payload.posts, errorShowMore: false });
        case ActionTypes.SetIsFetching:
            return Object.assign(Object.assign({}, state), { isFetching: payload });
        case ActionTypes.PageChange:
            return Object.assign(Object.assign({}, state), { currentPage: payload, isFetching: true });
        case ActionTypes.SetErrorLoad:
            return Object.assign(Object.assign({}, state), { errorLoad: payload });
        case ActionTypes.SetErrorShowMore:
            return Object.assign(Object.assign({}, state), { errorShowMore: payload });
        case ActionTypes.QueryParamsChange:
            return Object.assign(Object.assign({}, state), { queryParams: Object.assign(Object.assign({}, state.queryParams), payload) });
        default:
            return state;
    }
};
exports.reducer = reducer;