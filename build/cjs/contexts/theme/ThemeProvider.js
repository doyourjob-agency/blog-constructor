"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const constants_1 = require("../../constants");
const ThemeContext_1 = require("./ThemeContext");
const ThemeValueContext_1 = require("./ThemeValueContext");
class ThemeProvider extends react_1.default.Component {
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
        return (react_1.default.createElement(ThemeContext_1.ThemeContext.Provider, { value: this.state },
            react_1.default.createElement(ThemeValueContext_1.ThemeValueContext.Provider, { value: { themeValue: this.state.themeValue } }, this.props.children)));
    }
    updateBodyClassName(theme) {
        const bodyEl = document.body;
        if (!bodyEl.classList.contains(constants_1.UIKIT_ROOT_CLASS)) {
            bodyEl.classList.add(constants_1.UIKIT_ROOT_CLASS);
        }
        bodyEl.classList.toggle(`${constants_1.UIKIT_ROOT_CLASS}_theme_light`, theme === 'light');
        bodyEl.classList.toggle(`${constants_1.UIKIT_ROOT_CLASS}_theme_dark`, theme === 'dark');
    }
}
exports.ThemeProvider = ThemeProvider;
ThemeProvider.defaultProps = {
    theme: constants_1.DEFAULT_THEME,
};