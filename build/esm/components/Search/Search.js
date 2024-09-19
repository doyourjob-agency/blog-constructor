import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Icon, TextInput } from '@gravity-ui/uikit';
import lodashDebounce from 'lodash/debounce';
import { useIsIPhone } from '../../hooks/useIsIPhone';
import { Keyset, i18 } from '../../i18n';
import { Close } from '../../icons/Close';
import { SearchIcon } from '../../icons/SearchIcon';
import { block } from '../../utils/cn';
import './Search.css';
const b = block('search');
const SEARCH_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;
const AUTOFOCUS_TIMEOUT = 0;
/**
 * Search component, placed on blog main page,
 * based on TextInput from uikit
 *
 * @returns {JSX|null}
 */
export const Search = ({ className, initialValue, onSubmit, debounce = 300, placeholder = i18(Keyset.Search), size = 'm', autoFocus = false, }) => {
    const handleChange = lodashDebounce(onSubmit, debounce);
    const [isSetInitValue, setIsSetInitValue] = useState(false);
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);
    const isIPhone = useIsIPhone();
    useEffect(() => {
        if (!isSetInitValue && !value && initialValue) {
            setIsSetInitValue(true);
            setValue(initialValue);
        }
    }, [isSetInitValue, value, initialValue]);
    useEffect(() => {
        if (autoFocus && !isIPhone) {
            setTimeout(() => { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true }); }, AUTOFOCUS_TIMEOUT);
        }
    }, [autoFocus, inputRef, isIPhone]);
    const rightContent = useMemo(() => {
        const iconData = value ? Close : SearchIcon;
        const iconSize = value ? CLOSE_ICON_SIZE : SEARCH_ICON_SIZE;
        const handleClick = () => {
            if (value) {
                handleChange.cancel();
                setValue('');
                onSubmit('');
            }
        };
        return (React.createElement("button", { className: b('input-icon'), onClick: handleClick },
            React.createElement(Icon, { size: iconSize, data: iconData })));
    }, [handleChange, onSubmit, value]);
    return (React.createElement("div", { className: b({ size }, className) },
        React.createElement(TextInput, { className: b('search-suggest'), value: value, onUpdate: (query) => {
                setValue(query);
                handleChange(query);
            }, placeholder: placeholder, size: size === 'm' ? 'xl' : 'l', controlRef: inputRef, view: "clear", controlProps: {
                className: b('search-suggest-control'),
            }, rightContent: rightContent })));
};