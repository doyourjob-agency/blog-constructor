"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeValueContext = exports.initialValue = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
exports.initialValue = {
    themeValue: 'light',
};
exports.ThemeValueContext = react_1.default.createContext(exports.initialValue);