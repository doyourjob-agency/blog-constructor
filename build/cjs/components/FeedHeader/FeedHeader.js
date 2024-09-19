"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedHeader = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const cn_1 = require("../../utils/cn");
const Controls_1 = require("./components/Controls/Controls");
const b = (0, cn_1.block)('feed-header');
const FeedHeader = ({ tags, services, handleLoadData, offset = 'default', background, theme = 'light', verticalOffset = 'l', className, queryParams, }) => {
    const backgroundThemed = background && (0, page_constructor_1.getThemedValue)(background, theme);
    return (react_1.default.createElement("header", { className: b('header', { ['has-background']: Boolean(background) }, className) },
        (backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.color) ? (react_1.default.createElement(page_constructor_1.FullWidthBackground, { style: { backgroundColor: backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.color }, theme: "rounded" })) : null,
        react_1.default.createElement(page_constructor_1.Grid, { className: b('content', { offset, theme, 'vertical-offset': verticalOffset }) },
            backgroundThemed ? (react_1.default.createElement(page_constructor_1.BackgroundImage, { src: backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.url, className: b('background'), imageClassName: b('background-img'), style: {
                    backgroundColor: backgroundThemed.fullWidth
                        ? ''
                        : backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.color,
                }, disableCompress: backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.disableCompress })) : null,
            react_1.default.createElement(Controls_1.Controls, { tags: tags, services: services, handleLoadData: handleLoadData, queryParams: queryParams }))));
};
exports.FeedHeader = FeedHeader;