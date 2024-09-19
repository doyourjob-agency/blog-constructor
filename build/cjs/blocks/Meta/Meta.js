"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const PostInfo_1 = require("../../components/PostInfo/PostInfo");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const constants_1 = require("../../constants");
const LocaleContext_1 = require("../../contexts/LocaleContext");
const SettingsContext_1 = require("../../contexts/SettingsContext");
const PostPageContext_1 = require("../../contexts/PostPageContext");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const common_1 = require("../../utils/common");
const utils_1 = require("../../counters/utils");
const b = (0, cn_1.block)('meta');
const analyticsEventsContainer = {
    sharing: (0, common_1.prepareAnalyticsEvent)({ name: constants_1.DefaultGoalIds.shareBottom }),
    save: (0, common_1.prepareAnalyticsEvent)({ name: constants_1.DefaultGoalIds.saveBottom }),
};
const breadcrumbsGoals = (0, common_1.prepareAnalyticsEvent)({
    name: constants_1.DefaultGoalIds.breadcrumbsBottom,
    counter: utils_1.AnalyticsCounter.CrossSite,
});
const Meta = (props) => {
    const { paddingTop = 'l', paddingBottom = 'l', theme = 'light', qa } = props;
    const { post } = (0, react_1.useContext)(PostPageContext_1.PostPageContext);
    const { locale } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const qaAttributes = (0, common_1.getQaAttributes)(qa, 'post-info');
    const { getBlogPath = common_1.getBlogPath } = (0, react_1.useContext)(SettingsContext_1.SettingsContext);
    const blogPath = getBlogPath(locale.pathPrefix || '');
    const { title, id, date, readingTime, tags } = post;
    const breadcrumbs = (0, common_1.getBreadcrumbs)({ tags, blogPath });
    breadcrumbs.analyticsEvents = (0, common_1.getMergedAnalyticsEvents)(breadcrumbsGoals);
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper },
        breadcrumbs && (react_1.default.createElement(page_constructor_1.HeaderBreadcrumbs, { items: breadcrumbs.items, className: b('breadcrumbs'), theme: theme })),
        title && (react_1.default.createElement(page_constructor_1.YFMWrapper, { content: title, modifiers: {
                blogBreadcrumbs: true,
                resetPaddings: true,
            } })),
        post && (react_1.default.createElement(PostInfo_1.PostInfo, { postId: id, date: date, readingTime: readingTime, analyticsEventsContainer: analyticsEventsContainer, qa: qaAttributes.postInfo }))));
};
exports.Meta = Meta;