import React from 'react';
import { DEFAULT_THEME, UIKIT_ROOT_CLASS } from '../../constants';
import { ThemeContext } from './ThemeContext';
import { ThemeValueContext } from './ThemeValueContext';
export class ThemeProvider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            theme: this.props.theme,
            themeValue: this.props.theme,
            setTheme: (theme) => {
                this.setState({ theme });
            },
        };
    }
    componentDidMount() {
        this.updateBodyClassName(this.state.themeValue);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            this.setState({ themeValue: this.state.theme });
            this.updateBodyClassName(this.state.theme);
        }
        if (prevProps.theme !== this.props.theme) {
            this.setState({ themeValue: this.state.theme });
            this.updateBodyClassName(this.state.theme);
        }
    }
    render() {
        return (React.createElement(ThemeContext.Provider, { value: this.state },
            React.createElement(ThemeValueContext.Provider, { value: { themeValue: this.state.themeValue } }, this.props.children)));
    }
    updateBodyClassName(theme) {
        const bodyEl = document.body;
        if (!bodyEl.classList.contains(UIKIT_ROOT_CLASS)) {
            bodyEl.classList.add(UIKIT_ROOT_CLASS);
        }
        bodyEl.classList.toggle(`${UIKIT_ROOT_CLASS}_theme_light`, theme === 'light');
        bodyEl.classList.toggle(`${UIKIT_ROOT_CLASS}_theme_dark`, theme === 'dark');
    }
}
ThemeProvider.defaultProps = {
    theme: DEFAULT_THEME,
};