import React, { useContext } from 'react';
import { PostPageContext } from '../../contexts/PostPageContext';
import { block } from '../../utils/cn';
import { Date } from './components/Date';
import { ReadingTime } from './components/ReadingTime';
import { Save } from './components/Save';
import { Sharing } from './components/Sharing';
import { getQaAttributes } from '../../utils/common';
import './PostInfo.css';
const b = block('post-info');
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
export const PostInfo = ({ date, readingTime, postId, theme = 'light', qa, analyticsEventsContainer, }) => {
    const { likes } = useContext(PostPageContext);
    const qaAttributes = getQaAttributes(qa, 'date', 'reading-time', 'save');
    return (React.createElement("div", { className: b('container', { theme }) },
        date && React.createElement(Date, { date: date, qa: qaAttributes.date }),
        readingTime && React.createElement(ReadingTime, { readingTime: readingTime, qa: qaAttributes.readingTime }),
        React.createElement(Sharing, { theme: theme, analyticsEvents: analyticsEventsContainer === null || analyticsEventsContainer === void 0 ? void 0 : analyticsEventsContainer.sharing }),
        likes && (React.createElement(Save, { postId: postId, title: likes.likesCount, hasUserLike: likes.hasUserLike, handleUserLike: likes.handleUserLike, analyticsEvents: analyticsEventsContainer === null || analyticsEventsContainer === void 0 ? void 0 : analyticsEventsContainer.save, theme: theme, qa: qaAttributes.save }))));
};