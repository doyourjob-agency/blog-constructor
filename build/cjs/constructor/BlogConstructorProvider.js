"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogConstructorProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const constants_1 = require("../constants");
const DeviceContext_1 = require("../contexts/DeviceContext");
const LocaleContext_1 = require("../contexts/LocaleContext");
const MobileContext_1 = require("../contexts/MobileContext");
const RouterContext_1 = require("../contexts/RouterContext");
const SettingsContext_1 = require("../contexts/SettingsContext");
const ThemeValueContext_1 = require("../contexts/theme/ThemeValueContext");
const BlogConstructorProvider = ({ isMobile, locale = {}, router = {}, theme = constants_1.DEFAULT_THEME, device = {}, analytics = {}, settings = {}, children, }) => {
    const context = [
        react_1.default.createElement(ThemeValueContext_1.ThemeValueContext.Provider, { value: { themeValue: theme }, key: "theme-context" }),
        react_1.default.createElement(page_constructor_1.ThemeContext.Provider, { value: { theme: theme }, key: "pc-theme" }),
        react_1.default.createElement(LocaleContext_1.LocaleContext.Provider, { value: { locale }, key: "locale-context" }),
        react_1.default.createElement(RouterContext_1.RouterContext.Provider, { value: router, key: "router-context" }),
        react_1.default.createElement(MobileContext_1.MobileContext.Provider, { value: Boolean(isMobile), key: "is-mobile-context" }),
        react_1.default.createElement(DeviceContext_1.DeviceContext.Provider, { value: device, key: "device-context" }),
        react_1.default.createElement(SettingsContext_1.SettingsContext.Provider, { value: settings, key: "settings-context" }),
        react_1.default.createElement(page_constructor_1.AnalyticsContext.Provider, { value: analytics, key: "analytics-context" }),
    ].reduceRight((prev, provider) => react_1.default.cloneElement(provider, {}, prev), children);
    return react_1.default.createElement(react_1.Fragment, null, context);
};
exports.BlogConstructorProvider = BlogConstructorProvider;