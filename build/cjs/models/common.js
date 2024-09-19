"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCardTitleHeadingLevel = exports.PostCardSize = exports.DefaultEventNames = exports.BlockType = exports.Theme = void 0;
var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme = exports.Theme || (exports.Theme = {}));
var BlockType;
(function (BlockType) {
    BlockType["Header"] = "blog-header-block";
    BlockType["YFM"] = "blog-yfm-block";
    BlockType["Layout"] = "blog-layout-block";
    BlockType["Media"] = "blog-media-block";
    BlockType["Banner"] = "blog-banner-block";
    BlockType["CTA"] = "blog-cta-block";
    BlockType["ColoredText"] = "blog-colored-text-block";
    BlockType["Author"] = "blog-author-block";
    BlockType["Suggest"] = "blog-suggest-block";
    BlockType["Meta"] = "blog-meta-block";
    BlockType["Feed"] = "blog-feed-block";
    BlockType["Form"] = "blog-form-block";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
var DefaultEventNames;
(function (DefaultEventNames) {
    DefaultEventNames["ShareButton"] = "share-button-click";
    DefaultEventNames["SaveButton"] = "save-button-click";
    DefaultEventNames["ShowMore"] = "show-more-button-click";
    DefaultEventNames["PaginatorHome"] = "paginator-home-button-click";
    DefaultEventNames["PaginatorNext"] = "paginator-next-button-click";
    DefaultEventNames["PaginatorPage"] = "paginator-page-button-click";
    DefaultEventNames["Tag"] = "selector-tag-click";
    DefaultEventNames["Service"] = "selector-service-click";
    DefaultEventNames["SaveOnly"] = "save-only-button-click";
})(DefaultEventNames = exports.DefaultEventNames || (exports.DefaultEventNames = {}));
var PostCardSize;
(function (PostCardSize) {
    PostCardSize["SMALL"] = "s";
    PostCardSize["MEDIUM"] = "m";
})(PostCardSize = exports.PostCardSize || (exports.PostCardSize = {}));
var PostCardTitleHeadingLevel;
(function (PostCardTitleHeadingLevel) {
    PostCardTitleHeadingLevel["H2"] = "h2";
    PostCardTitleHeadingLevel["H3"] = "h3";
})(PostCardTitleHeadingLevel = exports.PostCardTitleHeadingLevel || (exports.PostCardTitleHeadingLevel = {}));