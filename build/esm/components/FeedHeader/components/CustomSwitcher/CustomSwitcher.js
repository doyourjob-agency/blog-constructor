import React, { useMemo } from 'react';
import { Icon } from '@gravity-ui/uikit';
import { DropdownArrow } from '../../../../icons/DropdownArrow';
import { Close } from '../../../../icons/Close';
import { block } from '../../../../utils/cn';
import './CustomSwitcher.css';
const b = block('feed-custom-switcher');
const ICON_SIZE = 12;
const CLEAR_ICON_SIZE = 11;
export const CustomSwitcher = ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, }) => {
    const itemsNames = useMemo(() => {
        const items = list
            .filter((item) => initial.includes(item.value))
            .map((item) => item.content);
        return items.length ? items : [defaultLabel];
    }, [defaultLabel, initial, list]);
    const hasCounter = itemsNames.length > 1;
    return (React.createElement("div", { className: b('custom-switcher'), ref: controlRef },
        React.createElement("button", { onClick: onClick, className: b('custom-switcher-element', { overlay: true }), onKeyDown: onKeyDown, "aria-expanded": open }),
        React.createElement("div", { className: b('custom-switcher-element', { content: true }) }, itemsNames === null || itemsNames === void 0 ? void 0 : itemsNames.join(', ')),
        renderClear &&
            renderClear({
                renderIcon: () => (React.createElement(Icon, { data: Close, size: CLEAR_ICON_SIZE, className: b('clear') })),
            }),
        hasCounter && (React.createElement("div", { className: b('custom-switcher-element', { counter: true }) }, itemsNames.length)),
        React.createElement("div", { className: b('custom-switcher-element', { arrow: true }) },
            React.createElement(Icon, { data: DropdownArrow, size: ICON_SIZE, className: b('switcher-arrow') }))));
};