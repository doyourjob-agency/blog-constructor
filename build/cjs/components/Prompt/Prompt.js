"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const useHover_1 = require("../../hooks/useHover");
const useOpenCloseTimer_1 = require("../../hooks/useOpenCloseTimer");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('prompt');
/**
 * Popup that appears with text message and button(s) for given `actions`.
 * Features:
 *  - Automatically disappears after `openDuration` in milliseconds
 *  - `openTimestamp` (`Date.now()`) resets the visible duration
 * @returns {JSX|null}
 */
const Prompt = ({ text, actions, className, openTimestamp = 0, openDuration, theme, }) => {
    const [ref, hovering] = (0, useHover_1.useHover)();
    const { open: isOpen } = (0, useOpenCloseTimer_1.useOpenCloseTimer)(openTimestamp, openDuration);
    const open = isOpen || hovering;
    const mounted = openTimestamp > 0;
    return (react_1.default.createElement("div", { className: b({ theme, open, close: !open, mounted }, className) },
        react_1.default.createElement("div", { className: b('content'), ref: ref },
            react_1.default.createElement("span", { className: b('text') }, text),
            react_1.default.createElement("div", { className: b('actions') }, actions.map((_a, i) => {
                var { view = 'action', className: btnClass } = _a, btnProps = tslib_1.__rest(_a, ["view", "className"]);
                return (react_1.default.createElement(uikit_1.Button, Object.assign({ key: i, className: b('action', btnClass), view: view }, btnProps)));
            })))));
};
exports.Prompt = Prompt;