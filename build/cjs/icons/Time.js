"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const Time = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", viewBox: "0 0 16 17", fill: "currentColor" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 16.004a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm3.357-3.736a1 1 0 0 0-.342-1.372L9 7.688V5.004a1 1 0 0 0-2 0v3.25a1 1 0 0 0 .486.857l2.5 1.5a1 1 0 0 0 1.371-.343Z" })));
exports.Time = Time;