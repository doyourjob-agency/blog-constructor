"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const LikesContext_1 = require("../../contexts/LikesContext");
const common_1 = require("../../models/common");
const cn_1 = require("../../utils/cn");
const SuggestPostInfo_1 = require("../PostInfo/SuggestPostInfo");
const useAriaAttributes_1 = require("../../hooks/useAriaAttributes");
const b = (0, cn_1.block)('post-card');
const PostCard = ({ post, fullWidth = false, size = common_1.PostCardSize.SMALL, showTag = false, titleHeadingLevel = common_1.PostCardTitleHeadingLevel.H3, analyticsEvents, }) => {
    var _a;
    const { title: postTitle, htmlTitle, textTitle, blogPostId, id, date, readingTime, hasUserLike, likes, image, description, tags, url, } = post;
    const title = postTitle || textTitle || htmlTitle;
    const { toggleLike, hasLikes } = (0, react_1.useContext)(LikesContext_1.LikesContext);
    const likesProps = (0, react_1.useMemo)(() => hasLikes
        ? {
            hasUserLike,
            likesCount: likes,
            toggleLike,
        }
        : undefined, [hasUserLike, likes, toggleLike, hasLikes]);
    const titleId = (0, uikit_1.useUniqId)();
    const descriptionId = (0, uikit_1.useUniqId)();
    const dateId = (0, uikit_1.useUniqId)();
    const tagId = (0, uikit_1.useUniqId)();
    const readingTimeId = (0, uikit_1.useUniqId)();
    const isTagVisible = showTag && ((_a = tags === null || tags === void 0 ? void 0 : tags[0]) === null || _a === void 0 ? void 0 : _a.name);
    const ariaAttributes = (0, useAriaAttributes_1.useAriaAttributes)({
        labelIds: [isTagVisible && tagId, title && titleId],
        descriptionIds: [
            description && descriptionId,
            date && dateId,
            readingTime && readingTimeId,
        ],
    });
    return (react_1.default.createElement(page_constructor_1.CardBase, { url: url, analyticsEvents: analyticsEvents, className: b('card', { fullWidth }), extraProps: ariaAttributes },
        react_1.default.createElement(page_constructor_1.CardBase.Header, { image: image, className: b('header', { fullWidth }) },
            react_1.default.createElement("div", { className: b('image-container'), "data-qa": "blog-suggest-header" })),
        react_1.default.createElement(page_constructor_1.CardBase.Content, null,
            isTagVisible && (react_1.default.createElement("div", { id: tagId, className: b('tag', { size }) }, tags[0].name)),
            title &&
                react_1.default.createElement(titleHeadingLevel, { className: b('title', { size }) }, react_1.default.createElement("span", null,
                    react_1.default.createElement(page_constructor_1.HTML, { id: titleId }, title))),
            description && (react_1.default.createElement(page_constructor_1.YFMWrapper, { className: b('description'), content: description, modifiers: {
                    blog: size === 'm',
                    blogCard: true,
                }, id: descriptionId }))),
        react_1.default.createElement(page_constructor_1.CardBase.Footer, null,
            react_1.default.createElement(SuggestPostInfo_1.SuggestPostInfo, { postId: blogPostId || id, date: date, readingTime: readingTime, hasUserLike: hasUserLike, likes: likesProps, size: size, qa: "blog-suggest-block", dateId: dateId, readingTimeId: readingTimeId }))));
};
exports.PostCard = PostCard;