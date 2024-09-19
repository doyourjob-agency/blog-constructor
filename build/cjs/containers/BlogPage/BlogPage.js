"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const MetaWrapper_1 = require("../../components/MetaWrapper/MetaWrapper");
const PromptSignIn_1 = require("../../components/PromptSignIn/PromptSignIn");
const usePromptSignInProps_1 = require("../../components/PromptSignIn/hooks/usePromptSignInProps");
const FeedContext_1 = require("../../contexts/FeedContext");
const LikesContext_1 = require("../../contexts/LikesContext");
const useExtendedComponentMap_1 = require("../../hooks/useExtendedComponentMap");
const BlogPage = ({ content, posts, tags, services, getPosts, metaData, custom, hasLikes = false, toggleLike, navigation, settings, pageCountForShowSupportButtons, isSignedInUser = false, onClickSignIn, }) => {
    const _a = (0, usePromptSignInProps_1.usePromptSignInProps)(onClickSignIn), { requireSignIn } = _a, promptSignInProps = tslib_1.__rest(_a, ["requireSignIn"]);
    const likesContextData = (0, react_1.useMemo)(() => ({ toggleLike, hasLikes, isSignedInUser, requireSignIn }), [toggleLike, hasLikes, isSignedInUser, requireSignIn]);
    const actualComponentMap = (0, useExtendedComponentMap_1.useExtendedComponentMap)(custom);
    return (react_1.default.createElement(LikesContext_1.LikesContext.Provider, { value: likesContextData },
        react_1.default.createElement(FeedContext_1.FeedContext.Provider, { value: {
                posts: posts.posts,
                pinnedPost: posts.pinnedPost,
                totalCount: posts.count,
                tags,
                services: services !== null && services !== void 0 ? services : [],
                getPosts,
                pageCountForShowSupportButtons,
            } },
            react_1.default.createElement(page_constructor_1.PageConstructorProvider, Object.assign({}, settings),
                metaData ? react_1.default.createElement(MetaWrapper_1.MetaWrapper, Object.assign({}, metaData)) : null,
                react_1.default.createElement(page_constructor_1.PageConstructor, { content: content, custom: actualComponentMap, navigation: navigation }))),
        react_1.default.createElement(PromptSignIn_1.PromptSignIn, Object.assign({}, promptSignInProps))));
};
exports.BlogPage = BlogPage;