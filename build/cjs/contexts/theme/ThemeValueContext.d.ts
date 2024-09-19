import React from 'react';
export type ThemeValueType = 'light' | 'dark';
export interface ThemeValueContextProps {
    themeValue: ThemeValueType;
}
export declare const initialValue: ThemeValueContextProps;
export declare const ThemeValueContext: React.Context<ThemeValueContextProps>;
