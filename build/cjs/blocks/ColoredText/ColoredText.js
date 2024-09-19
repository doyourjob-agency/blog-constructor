"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColoredText = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const common_1 = require("../../utils/common");
const b = (0, cn_1.block)('colored-text');
const ColoredText = (_a) => {
    var { background, paddingTop, paddingBottom, qa } = _a, content = tslib_1.__rest(_a, ["background", "paddingTop", "paddingBottom", "qa"]);
    const contentData = (0, common_1.updateContentSizes)(content);
    const qaAttributes = (0, common_1.getQaAttributes)(qa);
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper },
        react_1.default.createElement("div", { className: b('container'), style: { backgroundColor: (background === null || background === void 0 ? void 0 : background.color) || 'none' }, "data-qa": qaAttributes.container },
            react_1.default.createElement("div", { className: b('picture-container') }, (background === null || background === void 0 ? void 0 : background.image) && (react_1.default.createElement(page_constructor_1.BackgroundImage, { className: b('picture'), alt: background === null || background === void 0 ? void 0 : background.altText, src: background === null || background === void 0 ? void 0 : background.image }))),
            react_1.default.createElement("div", { className: b('text-content') },
                react_1.default.createElement(page_constructor_1.Content, Object.assign({}, contentData, { qa: qaAttributes.content }))))));
};
exports.ColoredText = ColoredText;