import React, { PropsWithChildren } from 'react';
import { AnalyticsContextProps } from '@gravity-ui/page-constructor';
import { DeviceContextProps } from '../contexts/DeviceContext';
import { RouterContextProps } from '../contexts/RouterContext';
import { SettingsContextProps } from '../contexts/SettingsContext';
import { ThemeValueType } from '../contexts/theme/ThemeValueContext';
import { Locale } from '../models/locale';
export interface BlogConstructorProviderProps {
    isMobile?: boolean;
    locale?: Locale;
    router?: RouterContextProps;
    theme?: ThemeValueType;
    device?: DeviceContextProps;
    analytics?: AnalyticsContextProps;
    settings?: SettingsContextProps;
    children?: React.ReactNode;
}
export declare const BlogConstructorProvider: ({ isMobile, locale, router, theme, device, analytics, settings, children, }: PropsWithChildren<BlogConstructorProviderProps>) => React.JSX.Element;
