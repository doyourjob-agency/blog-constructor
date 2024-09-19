import React from 'react';
import { ThemeContextProps } from './ThemeContext';
import { ThemeValueType } from './ThemeValueContext';
interface ThemeProviderExternalProps {
}
interface ThemeProviderDefaultProps {
    theme: ThemeValueType;
    children?: React.ReactNode;
}
export interface ThemeProviderProps extends ThemeProviderExternalProps, Partial<ThemeProviderDefaultProps> {
}
interface ThemeProviderState extends ThemeContextProps {
    themeValue: ThemeValueType;
}
export declare class ThemeProvider extends React.Component<ThemeProviderExternalProps & ThemeProviderDefaultProps, ThemeProviderState> {
    static defaultProps: ThemeProviderDefaultProps;
    state: ThemeProviderState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ThemeProviderProps, prevState: ThemeProviderState): void;
    render(): React.JSX.Element;
    private updateBodyClassName;
}
export {};
