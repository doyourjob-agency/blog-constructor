"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YFM = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const common_1 = require("../../utils/common");
const b = (0, cn_1.cn)('yfm');
const YFM = (props) => {
    const { text, paddingTop, paddingBottom, qa } = props;
    const qaAttributes = (0, common_1.getQaAttributes)(qa);
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper },
        react_1.default.createElement(page_constructor_1.YFMWrapper, { content: text, modifiers: {
                blog: true,
                resetPaddings: true,
            }, className: b({ 'no-list-reset': true }) })));
};
exports.YFM = YFM;