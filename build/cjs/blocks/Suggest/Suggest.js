"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggest = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const PostCard_1 = require("../../components/PostCard/PostCard");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const PostPageContext_1 = require("../../contexts/PostPageContext");
const i18n_1 = require("../../i18n");
const paddings_1 = require("../../models/paddings");
const common_1 = require("../../utils/common");
const constants_1 = require("../../constants");
const utils_1 = require("../../counters/utils");
const suggestGoals = (0, common_1.prepareAnalyticsEvent)({
    name: constants_1.DefaultGoalIds.suggest,
    counter: utils_1.AnalyticsCounter.CrossSite,
});
/**
 * Suggested posts block
 *
 * @param posts - suggested posts list
 * @param paddingTop - padding top code
 * @param paddingBottom - padding bottom code
 *
 * @returns -jsx
 */
const Suggest = ({ paddingTop = 'l', paddingBottom = 'l' }) => {
    const { suggestedPosts } = (0, react_1.useContext)(PostPageContext_1.PostPageContext);
    if (suggestedPosts.length === 0) {
        return null;
    }
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        } },
        react_1.default.createElement(page_constructor_1.SliderBlock, { slidesToShow: { xl: 3, lg: 2, sm: 1 }, title: { text: (0, i18n_1.i18n)(i18n_1.Keyset.TitleSuggest) }, lazyLoad: false }, suggestedPosts.map((post) => (react_1.default.createElement(PostCard_1.PostCard, { key: post.id, analyticsEvents: suggestGoals, post: post }))))));
};
exports.Suggest = Suggest;