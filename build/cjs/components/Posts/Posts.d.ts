import React, { MouseEvent } from 'react';
import { PostData, Query } from '../../models/common';
type PostCardProps = {
    containerId: string;
    currentPage: number;
    isShowMoreVisible: boolean;
    errorShowMore: boolean;
    postCountOnPage: number;
    perPageInQuery: number;
    isFetching: boolean;
    handleShowMore: (value?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => Promise<void> | void;
    handlePageChange: (value: number) => Promise<void> | void;
    postsOnPage?: PostData[];
    pinnedPostOnPage?: PostData;
    pageCountForShowSupportButtons?: number;
    queryParams: Query;
};
export declare const Posts: ({ containerId, pinnedPostOnPage, currentPage, postsOnPage, isShowMoreVisible, errorShowMore, postCountOnPage, perPageInQuery, isFetching, handleShowMore, handlePageChange, pageCountForShowSupportButtons, queryParams, }: PostCardProps) => React.JSX.Element;
export {};
