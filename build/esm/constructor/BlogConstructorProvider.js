import React, { Fragment } from 'react';
import { AnalyticsContext } from '@gravity-ui/page-constructor';
import { DEFAULT_THEME } from '../constants';
import { DeviceContext } from '../contexts/DeviceContext';
import { LocaleContext } from '../contexts/LocaleContext';
import { MobileContext } from '../contexts/MobileContext';
import { RouterContext } from '../contexts/RouterContext';
import { SettingsContext } from '../contexts/SettingsContext';
import { ThemeValueContext } from '../contexts/theme/ThemeValueContext';
export const BlogConstructorProvider = ({ isMobile, locale = {}, router = {}, theme = DEFAULT_THEME, device = {}, analytics = {}, settings = {}, children, }) => {
    const context = [
        React.createElement(ThemeValueContext.Provider, { value: { themeValue: theme }, key: "theme-context" }),
        React.createElement(LocaleContext.Provider, { value: { locale }, key: "locale-context" }),
        React.createElement(RouterContext.Provider, { value: router, key: "router-context" }),
        React.createElement(MobileContext.Provider, { value: Boolean(isMobile), key: "is-mobile-context" }),
        React.createElement(DeviceContext.Provider, { value: device, key: "device-context" }),
        React.createElement(SettingsContext.Provider, { value: settings, key: "settings-context" }),
        React.createElement(AnalyticsContext.Provider, { value: analytics, key: "analytics-context" }),
    ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev), children);
    return React.createElement(Fragment, null, context);
};