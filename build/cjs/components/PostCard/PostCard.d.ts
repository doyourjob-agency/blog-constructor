import React from 'react';
import { AnalyticsEventsProp } from '@gravity-ui/page-constructor';
import { PostCardSize, PostCardTitleHeadingLevel, PostData } from '../../models/common';
type PostCardProps = {
    post: PostData;
    fullWidth?: boolean;
    showTag?: boolean;
    size?: PostCardSize;
    titleHeadingLevel?: PostCardTitleHeadingLevel;
    analyticsEvents?: AnalyticsEventsProp;
};
export declare const PostCard: ({ post, fullWidth, size, showTag, titleHeadingLevel, analyticsEvents, }: PostCardProps) => React.JSX.Element;
export {};
