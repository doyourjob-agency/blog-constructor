"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestPostInfo = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useLikes_1 = require("../../hooks/useLikes");
const common_1 = require("../../models/common");
const cn_1 = require("../../utils/cn");
const Date_1 = require("./components/Date");
const ReadingTime_1 = require("./components/ReadingTime");
const Save_1 = require("./components/Save");
const b = (0, cn_1.block)('post-info');
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
const SuggestPostInfo = ({ postId, date, readingTime, likes, size = common_1.PostCardSize.SMALL, qa, dateId, readingTimeId, }) => {
    const { hasUserLike, likesCount, handleLike } = (0, useLikes_1.useLikes)({
        hasLike: likes === null || likes === void 0 ? void 0 : likes.hasUserLike,
        count: likes === null || likes === void 0 ? void 0 : likes.likesCount,
        toggleLikeCallback: likes === null || likes === void 0 ? void 0 : likes.toggleLike,
        postId: postId,
    });
    return (react_1.default.createElement("div", { className: b('container') },
        react_1.default.createElement("div", { className: b('suggest-container') },
            date && react_1.default.createElement(Date_1.Date, { date: date, size: size, id: dateId }),
            readingTime && (react_1.default.createElement(ReadingTime_1.ReadingTime, { readingTime: readingTime, size: size, id: readingTimeId }))),
        likes && postId && (react_1.default.createElement(Save_1.Save, { postId: postId, title: likesCount, hasUserLike: hasUserLike, handleUserLike: handleLike, size: size, qa: qa }))));
};
exports.SuggestPostInfo = SuggestPostInfo;