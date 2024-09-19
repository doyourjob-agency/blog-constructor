import React from 'react';
import { ThemeValueContext } from './ThemeValueContext';
export function withThemeValue(WrappedComponent) {
    var _a;
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    return _a = class WithThemeValueComponent extends React.Component {
            render() {
                return React.createElement(WrappedComponent, Object.assign({}, this.props, { themeValue: this.context.themeValue }));
            }
        },
        _a.displayName = `withThemeValue(${componentName})`,
        _a.contextType = ThemeValueContext,
        _a;
}