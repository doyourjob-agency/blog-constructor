"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const MetaWrapper_1 = require("../../components/MetaWrapper/MetaWrapper");
const PromptSignIn_1 = require("../../components/PromptSignIn/PromptSignIn");
const usePromptSignInProps_1 = require("../../components/PromptSignIn/hooks/usePromptSignInProps");
const LikesContext_1 = require("../../contexts/LikesContext");
const PostPageContext_1 = require("../../contexts/PostPageContext");
const useExtendedComponentMap_1 = require("../../hooks/useExtendedComponentMap");
const useLikes_1 = require("../../hooks/useLikes");
const BlogPostPage = ({ metaData, suggestedPosts, likes, content, post, settings, navigation, custom, shareOptions, isSignedInUser = false, onClickSignIn, }) => {
    const { hasUserLike, likesCount, handleLike } = (0, useLikes_1.useLikes)({
        hasLike: likes === null || likes === void 0 ? void 0 : likes.hasUserLike,
        count: likes === null || likes === void 0 ? void 0 : likes.likesCount,
        toggleLikeCallback: likes === null || likes === void 0 ? void 0 : likes.toggleLike,
        postId: post === null || post === void 0 ? void 0 : post.blogPostId,
    });
    const _a = (0, usePromptSignInProps_1.usePromptSignInProps)(onClickSignIn), { requireSignIn } = _a, promptSignInProps = tslib_1.__rest(_a, ["requireSignIn"]);
    const likesContextData = (0, react_1.useMemo)(() => ({
        toggleLike: likes === null || likes === void 0 ? void 0 : likes.toggleLike,
        hasLikes: Boolean(likes),
        isSignedInUser,
        requireSignIn,
    }), [likes, isSignedInUser, requireSignIn]);
    const actualComponentMap = (0, useExtendedComponentMap_1.useExtendedComponentMap)(custom);
    return (react_1.default.createElement(LikesContext_1.LikesContext.Provider, { value: likesContextData },
        react_1.default.createElement(PostPageContext_1.PostPageContext.Provider, { value: {
                post,
                suggestedPosts,
                likes: likes
                    ? {
                        handleUserLike: handleLike,
                        hasUserLike,
                        likesCount,
                    }
                    : undefined,
                shareOptions,
            } },
            react_1.default.createElement(page_constructor_1.PageConstructorProvider, Object.assign({}, settings),
                metaData ? react_1.default.createElement(MetaWrapper_1.MetaWrapper, Object.assign({}, metaData)) : null,
                react_1.default.createElement(page_constructor_1.PageConstructor, { content: content, custom: actualComponentMap, navigation: navigation }))),
        react_1.default.createElement(PromptSignIn_1.PromptSignIn, Object.assign({}, promptSignInProps))));
};
exports.BlogPostPage = BlogPostPage;