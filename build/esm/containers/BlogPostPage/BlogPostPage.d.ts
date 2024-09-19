import React, { SyntheticEvent } from 'react';
import { ShareOptions } from '@gravity-ui/components';
import { CustomConfig, NavigationData, PageConstructorProviderProps, PageContent } from '@gravity-ui/page-constructor';
import { MetaProps, PostData, ToggleLikeCallbackType } from '../../models/common';
import './BlogPostPage.css';
export interface BlogPostPageProps {
    suggestedPosts: PostData[];
    metaData?: MetaProps;
    likes?: {
        hasUserLike?: boolean;
        likesCount?: number;
        toggleLike?: ToggleLikeCallbackType;
    };
    content: PageContent;
    post: PostData;
    settings?: PageConstructorProviderProps;
    navigation?: NavigationData;
    custom?: CustomConfig;
    shareOptions?: ShareOptions[];
    isSignedInUser?: boolean;
    onClickSignIn?: React.EventHandler<SyntheticEvent>;
}
export declare const BlogPostPage: ({ metaData, suggestedPosts, likes, content, post, settings, navigation, custom, shareOptions, isSignedInUser, onClickSignIn, }: BlogPostPageProps) => React.JSX.Element;
