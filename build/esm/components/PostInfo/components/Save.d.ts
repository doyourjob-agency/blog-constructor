import React from 'react';
import { AnalyticsEventsProp } from '@gravity-ui/page-constructor';
import { QAProps } from '../../../models/common';
import '../PostInfo.css';
type SaveProps = QAProps & {
    title: string | number;
    postId: number | string;
    hasUserLike: boolean;
    handleUserLike: () => void;
    theme?: 'light' | 'dark';
    size?: 's' | 'm';
    analyticsEvents?: AnalyticsEventsProp;
};
/**
 * Components for 'save' blog UI-component
 *
 * @param title - post title
 * @param postId - post id
 * @param hasUserLike - flag what blog has like from current user
 * @param qa - test-attr
 * @param size - text size
 * @param analyticsEvents - a single or collection of objects detailing analytics events
 *
 * @returns jsx
 */
export declare const Save: ({ title, postId, hasUserLike, handleUserLike, size, theme, qa, analyticsEvents, }: SaveProps) => React.JSX.Element;
export {};
