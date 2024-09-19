import React from 'react';
import { ThemeContext } from './ThemeContext';
export function useTheme() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return [theme, setTheme];
}