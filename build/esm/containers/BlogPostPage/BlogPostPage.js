import { __rest } from "tslib";
import React, { useMemo } from 'react';
import { PageConstructor, PageConstructorProvider, } from '@gravity-ui/page-constructor';
import { MetaWrapper } from '../../components/MetaWrapper/MetaWrapper';
import { PromptSignIn } from '../../components/PromptSignIn/PromptSignIn';
import { usePromptSignInProps } from '../../components/PromptSignIn/hooks/usePromptSignInProps';
import { LikesContext } from '../../contexts/LikesContext';
import { PostPageContext } from '../../contexts/PostPageContext';
import { useExtendedComponentMap } from '../../hooks/useExtendedComponentMap';
import { useLikes } from '../../hooks/useLikes';
import './BlogPostPage.css';
export const BlogPostPage = ({ metaData, suggestedPosts, likes, content, post, settings, navigation, custom, shareOptions, isSignedInUser = false, onClickSignIn, }) => {
    const { hasUserLike, likesCount, handleLike } = useLikes({
        hasLike: likes === null || likes === void 0 ? void 0 : likes.hasUserLike,
        count: likes === null || likes === void 0 ? void 0 : likes.likesCount,
        toggleLikeCallback: likes === null || likes === void 0 ? void 0 : likes.toggleLike,
        postId: post === null || post === void 0 ? void 0 : post.blogPostId,
    });
    const _a = usePromptSignInProps(onClickSignIn), { requireSignIn } = _a, promptSignInProps = __rest(_a, ["requireSignIn"]);
    const likesContextData = useMemo(() => ({
        toggleLike: likes === null || likes === void 0 ? void 0 : likes.toggleLike,
        hasLikes: Boolean(likes),
        isSignedInUser,
        requireSignIn,
    }), [likes, isSignedInUser, requireSignIn]);
    const actualComponentMap = useExtendedComponentMap(custom);
    return (React.createElement(LikesContext.Provider, { value: likesContextData },
        React.createElement(PostPageContext.Provider, { value: {
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
            React.createElement(PageConstructorProvider, Object.assign({}, settings),
                metaData ? React.createElement(MetaWrapper, Object.assign({}, metaData)) : null,
                React.createElement(PageConstructor, { content: content, custom: actualComponentMap, navigation: navigation }))),
        React.createElement(PromptSignIn, Object.assign({}, promptSignInProps))));
};