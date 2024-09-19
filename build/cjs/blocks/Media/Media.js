"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('media');
const Media = (_a) => {
    var { text, paddingTop, paddingBottom } = _a, mediaProps = tslib_1.__rest(_a, ["text", "paddingTop", "paddingBottom"]);
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, className: b('container') },
        react_1.default.createElement("div", { className: b('border'), "data-qa": "blog-media-content" },
            react_1.default.createElement(page_constructor_1.Media, Object.assign({ className: b('content'), videoClassName: b('video'), imageClassName: b('image') }, mediaProps))),
        text && (react_1.default.createElement("div", { className: b('text-content') },
            react_1.default.createElement(page_constructor_1.YFMWrapper, { content: text, modifiers: {
                    blog: true,
                    blogMedia: true,
                    resetPaddings: true,
                } })))));
};
exports.Media = Media;