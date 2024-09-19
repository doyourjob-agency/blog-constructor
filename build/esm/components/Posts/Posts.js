import React from 'react';
import { CardLayoutBlock } from '@gravity-ui/page-constructor';
import { Button } from '@gravity-ui/uikit';
import { Keyset, i18 } from '../../i18n';
import { PostCardSize, PostCardTitleHeadingLevel } from '../../models/common';
import { block } from '../../utils/cn';
import { Paginator } from '../Paginator/Paginator';
import { PostCard } from '../PostCard/PostCard';
import { PostsEmpty } from '../PostsEmpty/PostsEmpty';
import './Posts.css';
const b = block('posts');
export const Posts = ({ containerId, pinnedPostOnPage, currentPage, postsOnPage, isShowMoreVisible, errorShowMore, postCountOnPage, perPageInQuery, isFetching, handleShowMore, handlePageChange, pageCountForShowSupportButtons, queryParams, }) => (React.createElement("div", { className: b() },
    isFetching && React.createElement("div", { className: b('loaderContainer') }),
    React.createElement("div", { id: containerId, className: b('cards-container', { isLoading: isFetching }) },
        pinnedPostOnPage && currentPage === 1 && (React.createElement("div", { className: b('pinned-container') },
            React.createElement(PostCard, { post: pinnedPostOnPage, size: PostCardSize.MEDIUM, fullWidth: true, showTag: true, titleHeadingLevel: PostCardTitleHeadingLevel.H2 }))),
        (postsOnPage === null || postsOnPage === void 0 ? void 0 : postsOnPage.length) ? (React.createElement(CardLayoutBlock, { title: '', colSizes: {
                all: 12,
                lg: 4,
                md: 6,
            } }, postsOnPage === null || postsOnPage === void 0 ? void 0 : postsOnPage.map((post) => (React.createElement(PostCard, { key: post.id, post: post, showTag: true, titleHeadingLevel: pinnedPostOnPage
                ? PostCardTitleHeadingLevel.H3
                : PostCardTitleHeadingLevel.H2 }))))) : (React.createElement(PostsEmpty, null))),
    React.createElement("div", { className: b('pagination') },
        Boolean(isShowMoreVisible && (postsOnPage === null || postsOnPage === void 0 ? void 0 : postsOnPage.length)) && (React.createElement(Button, { view: "outlined", size: "xl", className: b('more-button'), onClick: handleShowMore }, i18(Keyset.ActionLoadMore))),
        errorShowMore && (React.createElement("div", { className: b('error-show-more') },
            React.createElement("div", null, i18(Keyset.ErrorTitle)),
            React.createElement("div", null, i18(Keyset.PostLoadError)))),
        Boolean(currentPage && postCountOnPage) && (React.createElement("div", { className: b('paginator') },
            React.createElement(Paginator, { onPageChange: handlePageChange, page: currentPage, totalItems: postCountOnPage, itemsPerPage: perPageInQuery, maxPages: Infinity, pageCountForShowSupportButtons: pageCountForShowSupportButtons, queryParams: queryParams }))))));