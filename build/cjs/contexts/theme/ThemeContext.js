"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = exports.initialValue = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const constants_1 = require("../../constants");
exports.initialValue = {
    theme: constants_1.DEFAULT_THEME,
    setTheme: () => { },
};
exports.ThemeContext = react_1.default.createContext(exports.initialValue);