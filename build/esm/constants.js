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
export var DefaultGoalIds;
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
})(DefaultGoalIds || (DefaultGoalIds = {}));
export const DEFAULT_PADDINGS = {
    [PaddingsDirections.bottom]: 'l',
    [PaddingsDirections.top]: 'xs',
};