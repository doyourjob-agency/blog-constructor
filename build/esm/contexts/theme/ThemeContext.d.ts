import React from 'react';
import { ThemeValueType } from './ThemeValueContext';
export interface ThemeContextProps {
    theme: ThemeValueType;
    setTheme: (newTheme: ThemeValueType) => void;
}
export declare const initialValue: ThemeContextProps;
export declare const ThemeContext: React.Context<ThemeContextProps>;
