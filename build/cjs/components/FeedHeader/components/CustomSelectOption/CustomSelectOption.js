"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSelectOption = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const cn_1 = require("../../../../utils/cn");
const b = (0, cn_1.block)('feed-custom-select-option');
const CustomSelectOption = ({ data }) => (react_1.default.createElement("div", { className: b() },
    react_1.default.createElement("span", { className: b('icon') }, data.icon),
    react_1.default.createElement("span", null, data.content)));
exports.CustomSelectOption = CustomSelectOption;