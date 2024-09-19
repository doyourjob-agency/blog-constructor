import { PaddingsDirections } from './models/paddings';
export const BREAKPOINTS = {
    xs: 0,
    sm: 577,
    md: 769,
    lg: 1081,
    xl: 1185,
};
export const DEFAULT_THEME = 'light';
export const UIKIT_ROOT_CLASS = 'g-root';
export const UIKIT_THEME_LIGHT_CLASS = `${UIKIT_ROOT_CLASS}_theme_${DEFAULT_THEME}`;
export var BlogMetrikaGoalIds;
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
})(BlogMetrikaGoalIds || (BlogMetrikaGoalIds = {}));
export const DEFAULT_PADDINGS = {
    [PaddingsDirections.bottom]: 'l',
    [PaddingsDirections.top]: 'xs',
};