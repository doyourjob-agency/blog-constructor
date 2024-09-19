import React, { useContext, useMemo } from 'react';
import { CardBase, HTML, YFMWrapper } from '@gravity-ui/page-constructor';
import { useUniqId } from '@gravity-ui/uikit';
import { LikesContext } from '../../contexts/LikesContext';
import { PostCardSize, PostCardTitleHeadingLevel } from '../../models/common';
import { block } from '../../utils/cn';
import { SuggestPostInfo } from '../PostInfo/SuggestPostInfo';
import { useAriaAttributes } from '../../hooks/useAriaAttributes';
import './PostCard.css';
const b = block('post-card');
export const PostCard = ({ post, fullWidth = false, size = PostCardSize.SMALL, showTag = false, titleHeadingLevel = PostCardTitleHeadingLevel.H3, analyticsEvents, }) => {
    var _a;
    const { title: postTitle, htmlTitle, textTitle, blogPostId, id, date, readingTime, hasUserLike, likes, image, description, tags, url, } = post;
    const title = postTitle || textTitle || htmlTitle;
    const { toggleLike, hasLikes } = useContext(LikesContext);
    const likesProps = useMemo(() => hasLikes
        ? {
            hasUserLike,
            likesCount: likes,
            toggleLike,
        }
        : undefined, [hasUserLike, likes, toggleLike, hasLikes]);
    const titleId = useUniqId();
    const descriptionId = useUniqId();
    const dateId = useUniqId();
    const tagId = useUniqId();
    const readingTimeId = useUniqId();
    const isTagVisible = showTag && ((_a = tags === null || tags === void 0 ? void 0 : tags[0]) === null || _a === void 0 ? void 0 : _a.name);
    const ariaAttributes = useAriaAttributes({
        labelIds: [isTagVisible && tagId, title && titleId],
        descriptionIds: [
            description && descriptionId,
            date && dateId,
            readingTime && readingTimeId,
        ],
    });
    return (React.createElement(CardBase, { url: url, analyticsEvents: analyticsEvents, className: b('card', { fullWidth }), extraProps: ariaAttributes },
        React.createElement(CardBase.Header, { image: image, className: b('header', { fullWidth }) },
            React.createElement("div", { className: b('image-container'), "data-qa": "blog-suggest-header" })),
        React.createElement(CardBase.Content, null,
            isTagVisible && (React.createElement("div", { id: tagId, className: b('tag', { size }) }, tags[0].name)),
            title &&
                React.createElement(titleHeadingLevel, { className: b('title', { size }) }, React.createElement("span", null,
                    React.createElement(HTML, { id: titleId }, title))),
            description && (React.createElement(YFMWrapper, { className: b('description'), content: description, modifiers: {
                    blog: size === 'm',
                    blogCard: true,
                }, id: descriptionId }))),
        React.createElement(CardBase.Footer, null,
            React.createElement(SuggestPostInfo, { postId: blogPostId || id, date: date, readingTime: readingTime, hasUserLike: hasUserLike, likes: likesProps, size: size, qa: "blog-suggest-block", dateId: dateId, readingTimeId: readingTimeId }))));
};