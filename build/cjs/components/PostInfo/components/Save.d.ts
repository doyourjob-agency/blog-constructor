import React from 'react';
import { QAProps } from '../../../models/common';
type SaveProps = QAProps & {
    title: string | number;
    postId: number;
    hasUserLike: boolean;
    handleUserLike: () => void;
    theme?: 'light' | 'dark';
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    metrikaGoal?: string;
    size?: 's' | 'm';
};
/**
 * Components for 'save' blog UI-component
 *
 * @param title - post title
 * @param postId - post id
 * @param hasUserLike - flag what blog has like from current user
 * @param metrikaGoal - metrika goal name
 * @param qa - test-attr
 * @param size - text size
 *
 * @returns jsx
 */
export declare const Save: ({ title, postId, hasUserLike, handleUserLike, metrikaGoal, size, theme, qa, }: SaveProps) => React.JSX.Element;
export {};
