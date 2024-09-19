"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PADDINGS = exports.BlogMetrikaGoalIds = exports.UIKIT_THEME_LIGHT_CLASS = exports.UIKIT_ROOT_CLASS = exports.DEFAULT_THEME = exports.BREAKPOINTS = void 0;
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
var BlogMetrikaGoalIds;
(function (BlogMetrikaGoalIds) {
    BlogMetrikaGoalIds["shareTop"] = "SITE_BLOG_SHARE-TOP_CLICK";
    BlogMetrikaGoalIds["shareBottom"] = "SITE_BLOG_SHARE-BOTTOM_CLICK";
    BlogMetrikaGoalIds["breadcrumbsTop"] = "SITE_BLOG_BREADCRUMBS-TOP_CLICK";
    BlogMetrikaGoalIds["breadcrumbsBottom"] = "SITE_BLOG_BREADCRUMBS-BOTTOM_CLICK";
    BlogMetrikaGoalIds["saveTop"] = "SITE_BLOG_SAVE-TOP_CLICK";
    BlogMetrikaGoalIds["saveBottom"] = "SITE_BLOG_SAVE-BOTTOM_CLICK";
    BlogMetrikaGoalIds["suggest"] = "SITE_BLOG_INTERESTING-CARD_CLICK";
    BlogMetrikaGoalIds["bannerCommon"] = "SITE_BLOG_TEXT-BANNER_CLICK";
    BlogMetrikaGoalIds["cta"] = "SITE_BLOG_CTA_CLICK";
    BlogMetrikaGoalIds["tag"] = "SITE_BLOG_THEME-SELECTOR_CLCK";
    BlogMetrikaGoalIds["service"] = "SITE_BLOG_SERVICE-SELECTOR_CLCK";
    BlogMetrikaGoalIds["showMore"] = "SITE_BLOG-PAGINATION_SHOW-MORE_CLCK";
    BlogMetrikaGoalIds["next"] = "SITE_BLOG-PAGINATION_NEXT_CLCK";
    BlogMetrikaGoalIds["home"] = "SITE_BLOG-PAGINATION_HOME_CLCK";
    BlogMetrikaGoalIds["page"] = "SITE_BLOG-PAGINATION_PAGE-NMBR_CLCK";
})(BlogMetrikaGoalIds = exports.BlogMetrikaGoalIds || (exports.BlogMetrikaGoalIds = {}));
exports.DEFAULT_PADDINGS = {
    [paddings_1.PaddingsDirections.bottom]: 'l',
    [paddings_1.PaddingsDirections.top]: 'xs',
};