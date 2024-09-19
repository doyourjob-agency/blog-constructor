"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const i18n_1 = require("../../i18n");
const common_1 = require("../../models/common");
const cn_1 = require("../../utils/cn");
const Paginator_1 = require("../Paginator/Paginator");
const PostCard_1 = require("../PostCard/PostCard");
const PostsEmpty_1 = require("../PostsEmpty/PostsEmpty");
const b = (0, cn_1.block)('posts');
const Posts = ({ containerId, pinnedPostOnPage, currentPage, postsOnPage, isShowMoreVisible, errorShowMore, postCountOnPage, perPageInQuery, isFetching, handleShowMore, handlePageChange, pageCountForShowSupportButtons, queryParams, }) => (react_1.default.createElement("div", { className: b() },
    isFetching && react_1.default.createElement("div", { className: b('loaderContainer') }),
    react_1.default.createElement("div", { id: containerId, className: b('cards-container', { isLoading: isFetching }) },
        pinnedPostOnPage && currentPage === 1 && (react_1.default.createElement("div", { className: b('pinned-container') },
            react_1.default.createElement(PostCard_1.PostCard, { post: pinnedPostOnPage, size: common_1.PostCardSize.MEDIUM, fullWidth: true, showTag: true, titleHeadingLevel: common_1.PostCardTitleHeadingLevel.H2 }))),
        (postsOnPage === null || postsOnPage === void 0 ? void 0 : postsOnPage.length) ? (react_1.default.createElement(page_constructor_1.CardLayoutBlock, { title: '', colSizes: {
                all: 12,
                lg: 4,
                md: 6,
            } }, postsOnPage === null || postsOnPage === void 0 ? void 0 : postsOnPage.map((post) => (react_1.default.createElement(PostCard_1.PostCard, { key: post.id, post: post, showTag: true, titleHeadingLevel: pinnedPostOnPage
                ? common_1.PostCardTitleHeadingLevel.H3
                : common_1.PostCardTitleHeadingLevel.H2 }))))) : (react_1.default.createElement(PostsEmpty_1.PostsEmpty, null))),
    react_1.default.createElement("div", { className: b('pagination') },
        Boolean(isShowMoreVisible && (postsOnPage === null || postsOnPage === void 0 ? void 0 : postsOnPage.length)) && (react_1.default.createElement(uikit_1.Button, { view: "outlined", size: "xl", className: b('more-button'), onClick: handleShowMore }, (0, i18n_1.i18)(i18n_1.Keyset.ActionLoadMore))),
        errorShowMore && (react_1.default.createElement("div", { className: b('error-show-more') },
            react_1.default.createElement("div", null, (0, i18n_1.i18)(i18n_1.Keyset.ErrorTitle)),
            react_1.default.createElement("div", null, (0, i18n_1.i18)(i18n_1.Keyset.PostLoadError)))),
        Boolean(currentPage && postCountOnPage) && (react_1.default.createElement("div", { className: b('paginator') },
            react_1.default.createElement(Paginator_1.Paginator, { onPageChange: handlePageChange, page: currentPage, totalItems: postCountOnPage, itemsPerPage: perPageInQuery, maxPages: Infinity, pageCountForShowSupportButtons: pageCountForShowSupportButtons, queryParams: queryParams }))))));
exports.Posts = Posts;