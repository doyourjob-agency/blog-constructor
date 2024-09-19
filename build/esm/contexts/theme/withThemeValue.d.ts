import React from 'react';
import { Subtract } from 'utility-types';
import { ThemeValueContextProps } from './ThemeValueContext';
export interface WithThemeValueProps extends ThemeValueContextProps {
}
export declare function withThemeValue<T extends WithThemeValueProps>(WrappedComponent: React.ComponentType<T>): React.ComponentType<Subtract<T, WithThemeValueProps>>;
