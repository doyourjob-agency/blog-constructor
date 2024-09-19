"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeValue = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ThemeValueContext_1 = require("./ThemeValueContext");
function useThemeValue() {
    const { themeValue } = react_1.default.useContext(ThemeValueContext_1.ThemeValueContext);
    return themeValue;
}
exports.useThemeValue = useThemeValue;