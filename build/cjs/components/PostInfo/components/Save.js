"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Save = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const LikesContext_1 = require("../../../contexts/LikesContext");
const Save_1 = require("../../../icons/Save");
const SaveFilled_1 = require("../../../icons/SaveFilled");
const common_1 = require("../../../models/common");
const cn_1 = require("../../../utils/cn");
const common_2 = require("../../../utils/common");
const i18n_1 = require("../../../i18n");
const ICON_SIZE = 16;
const b = (0, cn_1.block)('post-info');
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
const Save = ({ title, postId, hasUserLike, handleUserLike, size, theme, qa, analyticsEvents, }) => {
    const { toggleLike, isSignedInUser, requireSignIn } = (0, react_1.useContext)(LikesContext_1.LikesContext);
    const handleAnalytics = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.SaveButton);
    const isLikeable = Boolean(toggleLike);
    const titleElementId = (0, uikit_1.useUniqId)();
    const isNumericTitle = typeof title === 'number';
    return (react_1.default.createElement("button", { className: b('item', { size, save: true }), onClick: (event) => {
            // both preventDefault and stopImmediatePropagation required to work properly
            // https://stackoverflow.com/questions/24415631/reactjs-syntheticevent-stoppropagation-only-works-with-react-events
            event.preventDefault();
            event.nativeEvent.stopImmediatePropagation();
            if (!isLikeable) {
                return;
            }
            // Open Popup to ask the User to sign in first
            if (!isSignedInUser && requireSignIn) {
                requireSignIn(event);
                return;
            }
            (0, common_2.postLikeStatus)(postId, Boolean(hasUserLike));
            handleUserLike();
            handleAnalytics(analyticsEvents);
        }, "data-qa": qa, "aria-pressed": hasUserLike, "aria-label": isNumericTitle ? (0, i18n_1.i18n)(i18n_1.Keyset.Save) : undefined, "aria-describedby": isNumericTitle ? titleElementId : undefined },
        react_1.default.createElement("div", { className: b('content', { cursor: isLikeable, theme }) },
            react_1.default.createElement("span", { className: b('icon') },
                react_1.default.createElement(uikit_1.Icon, { data: hasUserLike ? SaveFilled_1.SaveFilled : Save_1.Save, size: ICON_SIZE, className: b({ filled: Boolean(hasUserLike) }) })),
            react_1.default.createElement("span", { id: titleElementId, className: b('title', { cursor: isLikeable }) }, title))));
};
exports.Save = Save;