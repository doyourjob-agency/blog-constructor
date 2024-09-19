import React from 'react';
import { AnalyticsEventsProp } from '@gravity-ui/page-constructor';
import { PostData, QAProps } from '../../models/common';
import './PostInfo.css';
type PostInfoProps = QAProps & {
    postId: PostData['id'];
    readingTime: PostData['readingTime'];
    date: PostData['date'];
    theme?: 'light' | 'dark';
    analyticsEventsContainer?: Record<string, AnalyticsEventsProp>;
};
/**
 *  Blog post info panel component
 *
 * @param postId - post id
 * @param readingTime - post reading time
 * @param date - post create date
 * @param theme - theme name
 * @param qa - test-attr
 * @param analyticsEventsContainer - a map of records with a single or collection of objects detailing analytics events
 *
 * @returns jsx
 */
export declare const PostInfo: ({ date, readingTime, postId, theme, qa, analyticsEventsContainer, }: PostInfoProps) => React.JSX.Element;
export {};
