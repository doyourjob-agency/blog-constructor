"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInfo = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PostPageContext_1 = require("../../contexts/PostPageContext");
const cn_1 = require("../../utils/cn");
const Date_1 = require("./components/Date");
const ReadingTime_1 = require("./components/ReadingTime");
const Save_1 = require("./components/Save");
const Sharing_1 = require("./components/Sharing");
const common_1 = require("../../utils/common");
const b = (0, cn_1.block)('post-info');
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
const PostInfo = ({ date, readingTime, postId, theme = 'light', qa, analyticsEventsContainer, }) => {
    const { likes } = (0, react_1.useContext)(PostPageContext_1.PostPageContext);
    const qaAttributes = (0, common_1.getQaAttributes)(qa, 'date', 'reading-time', 'save');
    return (react_1.default.createElement("div", { className: b('container', { theme }) },
        date && react_1.default.createElement(Date_1.Date, { date: date, qa: qaAttributes.date }),
        readingTime && react_1.default.createElement(ReadingTime_1.ReadingTime, { readingTime: readingTime, qa: qaAttributes.readingTime }),
        react_1.default.createElement(Sharing_1.Sharing, { theme: theme, analyticsEvents: analyticsEventsContainer === null || analyticsEventsContainer === void 0 ? void 0 : analyticsEventsContainer.sharing }),
        likes && (react_1.default.createElement(Save_1.Save, { postId: postId, title: likes.likesCount, hasUserLike: likes.hasUserLike, handleUserLike: likes.handleUserLike, analyticsEvents: analyticsEventsContainer === null || analyticsEventsContainer === void 0 ? void 0 : analyticsEventsContainer.save, theme: theme, qa: qaAttributes.save }))));
};
exports.PostInfo = PostInfo;