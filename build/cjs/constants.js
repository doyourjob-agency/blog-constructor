"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PADDINGS = exports.DefaultGoalIds = exports.UIKIT_THEME_LIGHT_CLASS = exports.UIKIT_ROOT_CLASS = exports.DEFAULT_THEME = exports.BREAKPOINTS = void 0;
const paddings_1 = require("./models/paddings");
exports.BREAKPOINTS = {
    xs: 0,
    sm: 577,
    md: 769,
    lg: 1081,
    xl: 1185,
};
exports.DEFAULT_THEME = 'light';
exports.UIKIT_ROOT_CLASS = 'g-root';
exports.UIKIT_THEME_LIGHT_CLASS = `${exports.UIKIT_ROOT_CLASS}_theme_${exports.DEFAULT_THEME}`;
var DefaultGoalIds;
(function (DefaultGoalIds) {
    DefaultGoalIds["shareTop"] = "SITE_BLOG_SHARE-TOP_CLICK";
    DefaultGoalIds["shareBottom"] = "SITE_BLOG_SHARE-BOTTOM_CLICK";
    DefaultGoalIds["breadcrumbsTop"] = "SITE_BLOG_BREADCRUMBS-TOP_CLICK";
    DefaultGoalIds["breadcrumbsBottom"] = "SITE_BLOG_BREADCRUMBS-BOTTOM_CLICK";
    DefaultGoalIds["saveTop"] = "SITE_BLOG_SAVE-TOP_CLICK";
    DefaultGoalIds["saveBottom"] = "SITE_BLOG_SAVE-BOTTOM_CLICK";
    DefaultGoalIds["saveSuggest"] = "SITE_BLOG_SAVE-SUGGEST_CLICK";
    DefaultGoalIds["suggest"] = "SITE_BLOG_INTERESTING-CARD_CLICK";
    DefaultGoalIds["bannerCommon"] = "SITE_BLOG_TEXT-BANNER_CLICK";
    DefaultGoalIds["cta"] = "SITE_BLOG_CTA_CLICK";
    DefaultGoalIds["tag"] = "SITE_BLOG_THEME-SELECTOR_CLCK";
    DefaultGoalIds["service"] = "SITE_BLOG_SERVICE-SELECTOR_CLCK";
    DefaultGoalIds["showMore"] = "SITE_BLOG-PAGINATION_SHOW-MORE_CLCK";
    DefaultGoalIds["next"] = "SITE_BLOG-PAGINATION_NEXT_CLCK";
    DefaultGoalIds["home"] = "SITE_BLOG-PAGINATION_HOME_CLCK";
    DefaultGoalIds["page"] = "SITE_BLOG-PAGINATION_PAGE-NMBR_CLCK";
})(DefaultGoalIds = exports.DefaultGoalIds || (exports.DefaultGoalIds = {}));
exports.DEFAULT_PADDINGS = {
    [paddings_1.PaddingsDirections.bottom]: 'l',
    [paddings_1.PaddingsDirections.top]: 'xs',
};