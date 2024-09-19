import React from 'react';
import { useLikes } from '../../hooks/useLikes';
import { PostCardSize } from '../../models/common';
import { block } from '../../utils/cn';
import { Date } from './components/Date';
import { ReadingTime } from './components/ReadingTime';
import { Save } from './components/Save';
import { prepareAnalyticsEvent } from '../../utils/common';
import { DefaultGoalIds } from '../../constants';
import './PostInfo.css';
const b = block('post-info');
const saveEvents = prepareAnalyticsEvent({ name: DefaultGoalIds.saveSuggest });
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
export const SuggestPostInfo = ({ postId, date, readingTime, likes, size = PostCardSize.SMALL, qa, dateId, readingTimeId, }) => {
    const { hasUserLike, likesCount, handleLike } = useLikes({
        hasLike: likes === null || likes === void 0 ? void 0 : likes.hasUserLike,
        count: likes === null || likes === void 0 ? void 0 : likes.likesCount,
        toggleLikeCallback: likes === null || likes === void 0 ? void 0 : likes.toggleLike,
        postId: postId,
    });
    return (React.createElement("div", { className: b('container') },
        React.createElement("div", { className: b('suggest-container') },
            date && React.createElement(Date, { date: date, size: size, id: dateId }),
            readingTime && (React.createElement(ReadingTime, { readingTime: readingTime, size: size, id: readingTimeId }))),
        likes && postId && (React.createElement(Save, { postId: postId, title: likesCount, analyticsEvents: saveEvents, hasUserLike: hasUserLike, handleUserLike: handleLike, size: size, qa: qa }))));
};