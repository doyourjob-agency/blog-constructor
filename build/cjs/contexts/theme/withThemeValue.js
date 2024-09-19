"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withThemeValue = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ThemeValueContext_1 = require("./ThemeValueContext");
function withThemeValue(WrappedComponent) {
    var _a;
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    return _a = class WithThemeValueComponent extends react_1.default.Component {
            render() {
                return react_1.default.createElement(WrappedComponent, Object.assign({}, this.props, { themeValue: this.context.themeValue }));
            }
        },
        _a.displayName = `withThemeValue(${componentName})`,
        _a.contextType = ThemeValueContext_1.ThemeValueContext,
        _a;
}
exports.withThemeValue = withThemeValue;