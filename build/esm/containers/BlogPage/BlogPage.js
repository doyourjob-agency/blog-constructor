import { __rest } from "tslib";
import React, { useMemo } from 'react';
import { PageConstructor, PageConstructorProvider, } from '@gravity-ui/page-constructor';
import { MetaWrapper } from '../../components/MetaWrapper/MetaWrapper';
import { PromptSignIn } from '../../components/PromptSignIn/PromptSignIn';
import { usePromptSignInProps } from '../../components/PromptSignIn/hooks/usePromptSignInProps';
import { FeedContext } from '../../contexts/FeedContext';
import { LikesContext } from '../../contexts/LikesContext';
import { useExtendedComponentMap } from '../../hooks/useExtendedComponentMap';
import './BlogPage.css';
export const BlogPage = ({ content, posts, tags, services, getPosts, metaData, custom, hasLikes = false, toggleLike, navigation, settings, pageCountForShowSupportButtons, isSignedInUser = false, onClickSignIn, }) => {
    const _a = usePromptSignInProps(onClickSignIn), { requireSignIn } = _a, promptSignInProps = __rest(_a, ["requireSignIn"]);
    const likesContextData = useMemo(() => ({ toggleLike, hasLikes, isSignedInUser, requireSignIn }), [toggleLike, hasLikes, isSignedInUser, requireSignIn]);
    const actualComponentMap = useExtendedComponentMap(custom);
    return (React.createElement(LikesContext.Provider, { value: likesContextData },
        React.createElement(FeedContext.Provider, { value: {
                posts: posts.posts,
                pinnedPost: posts.pinnedPost,
                totalCount: posts.count,
                tags,
                services: services !== null && services !== void 0 ? services : [],
                getPosts,
                pageCountForShowSupportButtons,
            } },
            React.createElement(PageConstructorProvider, Object.assign({}, settings),
                metaData ? React.createElement(MetaWrapper, Object.assign({}, metaData)) : null,
                React.createElement(PageConstructor, { content: content, custom: actualComponentMap, navigation: navigation }))),
        React.createElement(PromptSignIn, Object.assign({}, promptSignInProps))));
};