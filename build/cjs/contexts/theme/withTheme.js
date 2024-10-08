"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTheme = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const ThemeContext_1 = require("./ThemeContext");
function withTheme(WrappedComponent) {
    var _a;
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    return _a = class WithThemeComponent extends react_1.default.Component {
            render() {
                return (react_1.default.createElement(WrappedComponent, Object.assign({}, this.props, { theme: this.context.theme, setTheme: this.context.setTheme })));
            }
        },
        _a.displayName = `withTheme(${componentName})`,
        _a.contextType = ThemeContext_1.ThemeContext,
        _a;
}
exports.withTheme = withTheme;