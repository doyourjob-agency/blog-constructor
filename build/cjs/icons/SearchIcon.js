"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIcon = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const svg_1 = require("../utils/svg");
const SearchIcon = (props) => (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, svg_1.a11yHiddenSvgProps, props),
    react_1.default.createElement("path", { d: "M9.532 9.539A5 5 0 1 0 2.468 2.46a5 5 0 0 0 7.064 7.08zm0 0L15 15", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", vectorEffect: "non-scaling-stroke" })));
exports.SearchIcon = SearchIcon;