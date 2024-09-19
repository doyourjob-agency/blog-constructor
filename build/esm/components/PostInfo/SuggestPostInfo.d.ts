import React from 'react';
import { PostCardSize, PostData, QAProps, ToggleLikeCallbackType } from '../../models/common';
import './PostInfo.css';
export interface SuggestPostInfoProps extends Pick<PostData, 'date' | 'readingTime' | 'hasUserLike'>, QAProps {
    postId: PostData['blogPostId'];
    size?: PostCardSize;
    likes?: {
        likesCount?: number;
        hasUserLike?: boolean;
        toggleLike?: ToggleLikeCallbackType;
    };
    dateId?: string;
    readingTimeId?: string;
}
/**
 * Suggest blog card info component
 *
 * @param postId - post id
 * @param date - post create date
 * @param readingTime - post reading time
 * @param hasUserLike - flag that the user liked the post
 * @param likes - likes count
 * @param qa - test-attr
 * @param size - text size
 * @param isModernIcon - flag what we need render 'bookmark' icon
 * @param dateId - id value for element with post date. Useful when providing accessible description
 * @param readingTimeId - id value for element with reading time. Useful when providing accessible description
 *
 * @returns jsx
 */
export declare const SuggestPostInfo: ({ postId, date, readingTime, likes, size, qa, dateId, readingTimeId, }: SuggestPostInfoProps) => React.JSX.Element;
