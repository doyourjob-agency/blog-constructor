import React from 'react';
import { PostData, QAProps } from '../../models/common';
import './PostInfo.css';
export type BlogMetrikaGoals = {
    sharing?: string;
    save?: string;
};
type PostInfoProps = QAProps & {
    postId: PostData['id'];
    readingTime: PostData['readingTime'];
    date: PostData['date'];
    theme?: 'light' | 'dark';
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    metrikaGoals?: BlogMetrikaGoals;
};
/**
 *  Blog post info panel component
 *
 * @param postId - post id
 * @param readingTime - post reading time
 * @param date - post create date
 * @param theme - theme name
 * @param metrikaGoals - metrika goals name
 * @param qa - test-attr
 *
 * @returns jsx
 */
export declare const PostInfo: ({ date, readingTime, postId, theme, metrikaGoals, qa, }: PostInfoProps) => React.JSX.Element;
export {};
