import React from 'react';
import { DEFAULT_THEME } from '../../constants';
export const initialValue = {
    theme: DEFAULT_THEME,
    setTheme: () => { },
};
export const ThemeContext = React.createContext(initialValue);