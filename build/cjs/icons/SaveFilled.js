"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFilled = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const SaveFilled = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.357 1.386A1.593 1.593 0 0 1 15 2.655v10.547c0 .678-.416 1.218-.841 1.499-.417.275-1.24.517-1.898-.103L8.32 11.234a.64.64 0 0 0-.64 0l-3.942 3.364c-.58.546-1.348.461-1.838.18a1.808 1.808 0 0 1-.9-1.576V2.786C1 2.055 1.515 1 2.667 1H13.2c.405 0 .822.13 1.157.386Z" })));
exports.SaveFilled = SaveFilled;