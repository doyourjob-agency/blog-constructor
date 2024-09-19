"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const PostInfo_1 = require("../../components/PostInfo/PostInfo");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const constants_1 = require("../../constants");
const LocaleContext_1 = require("../../contexts/LocaleContext");
const PostPageContext_1 = require("../../contexts/PostPageContext");
const paddings_1 = require("../../models/paddings");
const common_1 = require("../../utils/common");
const SettingsContext_1 = require("../../contexts/SettingsContext");
const utils_1 = require("../../counters/utils");
const analyticsEventsContainer = {
    sharing: (0, common_1.prepareAnalyticsEvent)({ name: constants_1.DefaultGoalIds.shareTop }),
    save: (0, common_1.prepareAnalyticsEvent)({ name: constants_1.DefaultGoalIds.saveTop }),
};
const breadcrumbsGoals = (0, common_1.prepareAnalyticsEvent)({
    name: constants_1.DefaultGoalIds.breadcrumbsTop,
    counter: utils_1.AnalyticsCounter.CrossSite,
});
const Header = (props) => {
    const { theme, paddingTop, paddingBottom } = props;
    const { post } = (0, react_1.useContext)(PostPageContext_1.PostPageContext);
    const { locale } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    const { getBlogPath = common_1.getBlogPath } = (0, react_1.useContext)(SettingsContext_1.SettingsContext);
    const blogPath = getBlogPath(locale.pathPrefix || '');
    const { description, title, id, date, readingTime, tags } = post;
    const breadcrumbs = (0, common_1.getBreadcrumbs)({ tags, blogPath });
    if (theme === 'dark' && breadcrumbs) {
        breadcrumbs.theme = 'dark';
    }
    breadcrumbs.analyticsEvents = breadcrumbsGoals;
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        } },
        react_1.default.createElement(page_constructor_1.HeaderBlock, Object.assign({}, props, { title: title, description: description, breadcrumbs: breadcrumbs }),
            react_1.default.createElement(PostInfo_1.PostInfo, { postId: id, date: date, readingTime: readingTime, analyticsEventsContainer: analyticsEventsContainer, theme: theme, qa: "blog-header-meta-container" }))));
};
exports.Header = Header;