"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const useIsIPhone_1 = require("../../hooks/useIsIPhone");
const i18n_1 = require("../../i18n");
const Close_1 = require("../../icons/Close");
const SearchIcon_1 = require("../../icons/SearchIcon");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('search');
const SEARCH_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;
const AUTOFOCUS_TIMEOUT = 0;
/**
 * Search component, placed on blog main page,
 * based on TextInput from uikit
 *
 * @returns {JSX|null}
 */
const Search = ({ className, initialValue, onSubmit, debounce = 300, placeholder = (0, i18n_1.i18n)(i18n_1.Keyset.Search), size = 'm', autoFocus = false, }) => {
    const handleChange = (0, debounce_1.default)(onSubmit, debounce);
    const [isSetInitValue, setIsSetInitValue] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const inputRef = (0, react_1.useRef)(null);
    const isIPhone = (0, useIsIPhone_1.useIsIPhone)();
    (0, react_1.useEffect)(() => {
        if (!isSetInitValue && !value && initialValue) {
            setIsSetInitValue(true);
            setValue(initialValue);
        }
    }, [isSetInitValue, value, initialValue]);
    (0, react_1.useEffect)(() => {
        if (autoFocus && !isIPhone) {
            setTimeout(() => { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true }); }, AUTOFOCUS_TIMEOUT);
        }
    }, [autoFocus, inputRef, isIPhone]);
    const rightContent = (0, react_1.useMemo)(() => {
        const iconData = value ? Close_1.Close : SearchIcon_1.SearchIcon;
        const iconSize = value ? CLOSE_ICON_SIZE : SEARCH_ICON_SIZE;
        const handleClick = () => {
            var _a;
            if (value) {
                handleChange.cancel();
                setValue('');
                onSubmit('');
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
        return (react_1.default.createElement("button", { className: b('input-icon'), onClick: handleClick, "aria-label": value ? (0, i18n_1.i18n)(i18n_1.Keyset.ClearAction) : undefined, "aria-hidden": !value },
            react_1.default.createElement(uikit_1.Icon, { size: iconSize, data: iconData })));
    }, [handleChange, onSubmit, value]);
    return (react_1.default.createElement("div", { className: b({ size }, className) },
        react_1.default.createElement(uikit_1.TextInput, { className: b('search-suggest'), value: value, onUpdate: (query) => {
                setValue(query);
                handleChange(query);
            }, placeholder: placeholder, size: size === 'm' ? 'xl' : 'l', controlRef: inputRef, view: "clear", controlProps: {
                className: b('search-suggest-control'),
            }, rightContent: rightContent })));
};
exports.Search = Search;