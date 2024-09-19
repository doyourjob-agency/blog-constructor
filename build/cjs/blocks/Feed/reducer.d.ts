import { PostData, Query } from '../../models/common';
export declare enum ActionTypes {
    SetErrorLoad = "setErrorLoad",
    SetErrorShowMore = "setErrorShowMore",
    SetIsShowMoreVisible = "setIsShowMoreVisible",
    SetPosts = "setPosts",
    SetShowMore = "setShowMore",
    SetIsFetching = "setIsFetching",
    PageChange = "pageChange",
    QueryParamsChange = "queryParamsChange"
}
export type State = {
    currentPage: number;
    errorLoad: boolean;
    errorShowMore: boolean;
    isFetching: boolean;
    isShowMoreVisible: boolean;
    lastLoadedCount: number;
    pinnedPostOnPage?: PostData;
    postCountOnPage: number;
    postsOnPage?: PostData[];
    queryParams: Query;
};
type Action = {
    type: ActionTypes.PageChange;
    payload: number;
} | {
    type: ActionTypes.SetIsFetching;
    payload: boolean;
} | {
    type: ActionTypes.SetPosts;
    payload: {
        posts: PostData[];
        pinnedPost?: PostData;
        count: number;
        page: number;
    };
} | {
    type: ActionTypes.SetShowMore;
    payload: {
        posts: PostData[];
        count: number;
        currentPage: number;
        lastLoadedCount: number;
    };
} | {
    type: ActionTypes.SetErrorLoad;
    payload: boolean;
} | {
    type: ActionTypes.SetErrorShowMore;
    payload: boolean;
} | {
    type: ActionTypes.SetIsShowMoreVisible;
    payload: boolean;
} | {
    type: ActionTypes.QueryParamsChange;
    payload: Query;
};
export declare const reducer: (state: State, { type, payload }: Action) => State;
export {};
