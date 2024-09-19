import { __rest } from "tslib";
import React from 'react';
import { Button } from '@gravity-ui/uikit';
import { useHover } from '../../hooks/useHover';
import { useOpenCloseTimer } from '../../hooks/useOpenCloseTimer';
import { block } from '../../utils/cn';
import './Prompt.css';
const b = block('prompt');
/**
 * Popup that appears with text message and button(s) for given `actions`.
 * Features:
 *  - Automatically disappears after `openDuration` in milliseconds
 *  - `openTimestamp` (`Date.now()`) resets the visible duration
 * @returns {JSX|null}
 */
export const Prompt = ({ text, actions, className, openTimestamp = 0, openDuration, theme, }) => {
    const [ref, hovering] = useHover();
    const { open: isOpen } = useOpenCloseTimer(openTimestamp, openDuration);
    const open = isOpen || hovering;
    const mounted = openTimestamp > 0;
    return (React.createElement("div", { className: b({ theme, open, close: !open, mounted }, className) },
        React.createElement("div", { className: b('content'), ref: ref },
            React.createElement("span", { className: b('text') }, text),
            React.createElement("div", { className: b('actions') }, actions.map((_a, i) => {
                var { view = 'action', className: btnClass } = _a, btnProps = __rest(_a, ["view", "className"]);
                return (React.createElement(Button, Object.assign({ key: i, className: b('action', btnClass), view: view }, btnProps)));
            })))));
};