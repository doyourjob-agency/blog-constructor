"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Close = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const Close = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 10 10", fill: "currentColor" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { d: "M10 0.7L9.3 0L5 4.3L0.7 0L0 0.7L4.3 5L0 9.3L0.7 10L5 5.7L9.3 10L10 9.3L5.7 5L10 0.7Z", fill: "currentColor" })));
exports.Close = Close;