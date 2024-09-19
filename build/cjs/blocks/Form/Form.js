"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('form-block');
const Form = (_a) => {
    var { paddingTop, paddingBottom } = _a, props = tslib_1.__rest(_a, ["paddingTop", "paddingBottom"]);
    const { formData, border = 'shadow' } = props;
    const [contentLoaded, setContentLoaded] = (0, react_1.useState)(false);
    const onContentLoad = () => {
        setContentLoaded(true);
    };
    if (!formData) {
        return null;
    }
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, className: b('wrapper') },
        react_1.default.createElement("div", { className: b('container', { hidden: !contentLoaded, border }) },
            react_1.default.createElement(page_constructor_1.InnerForm, { className: b('form'), formData: formData, onContentLoad: onContentLoad }))));
};
exports.Form = Form;