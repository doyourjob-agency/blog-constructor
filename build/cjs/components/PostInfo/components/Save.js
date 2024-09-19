"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Save = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const LikesContext_1 = require("../../../contexts/LikesContext");
const metrika_1 = tslib_1.__importDefault(require("../../../counters/metrika"));
const utils_1 = require("../../../counters/utils");
const Save_1 = require("../../../icons/Save");
const SaveFilled_1 = require("../../../icons/SaveFilled");
const common_1 = require("../../../models/common");
const cn_1 = require("../../../utils/cn");
const common_2 = require("../../../utils/common");
const ICON_SIZE = 16;
const b = (0, cn_1.block)('post-info');
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
const Save = ({ title, postId, hasUserLike, handleUserLike, metrikaGoal, size, theme, qa, }) => {
    const { toggleLike, isSignedInUser, requireSignIn } = (0, react_1.useContext)(LikesContext_1.LikesContext);
    const handleAnalytics = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.SaveButton);
    const isLikeable = Boolean(toggleLike);
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
            metrika_1.default.reachGoal(utils_1.MetrikaCounter.CrossSite, metrikaGoal);
            handleAnalytics();
        }, "data-qa": qa },
        react_1.default.createElement("div", { className: b('content', { cursor: isLikeable, theme }) },
            react_1.default.createElement("span", { className: b('icon') },
                react_1.default.createElement(uikit_1.Icon, { data: hasUserLike ? SaveFilled_1.SaveFilled : Save_1.Save, size: ICON_SIZE, className: b({ filled: Boolean(hasUserLike) }) })),
            react_1.default.createElement("span", { className: b('title', { cursor: isLikeable }) }, title))));
};
exports.Save = Save;