import React from 'react';
import { MetrikaGoal } from '@gravity-ui/page-constructor';
import { PostCardSize, PostCardTitleHeadingLevel, PostData } from '../../models/common';
type PostCardProps = {
    post: PostData;
    fullWidth?: boolean;
    showTag?: boolean;
    size?: PostCardSize;
    titleHeadingLevel?: PostCardTitleHeadingLevel;
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    metrikaGoals?: MetrikaGoal;
};
export declare const PostCard: ({ post, metrikaGoals, fullWidth, size, showTag, titleHeadingLevel, }: PostCardProps) => React.JSX.Element;
export {};
