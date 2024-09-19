import React from 'react';
import { ThemeValueContext } from './ThemeValueContext';
export function useThemeValue() {
    const { themeValue } = React.useContext(ThemeValueContext);
    return themeValue;
}