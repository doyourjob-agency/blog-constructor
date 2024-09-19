"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSwitcher = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const DropdownArrow_1 = require("../../../../icons/DropdownArrow");
const Close_1 = require("../../../../icons/Close");
const cn_1 = require("../../../../utils/cn");
const b = (0, cn_1.block)('feed-custom-switcher');
const ICON_SIZE = 12;
const CLEAR_ICON_SIZE = 11;
const CustomSwitcher = ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, }) => {
    const itemsNames = (0, react_1.useMemo)(() => {
        const items = list
            .filter((item) => initial.includes(item.value))
            .map((item) => item.content);
        return items.length ? items : [defaultLabel];
    }, [defaultLabel, initial, list]);
    const hasCounter = itemsNames.length > 1;
    return (react_1.default.createElement("div", { className: b('custom-switcher'), ref: controlRef },
        react_1.default.createElement("button", { onClick: onClick, className: b('custom-switcher-element', { overlay: true }), onKeyDown: onKeyDown, "aria-expanded": open }),
        react_1.default.createElement("div", { className: b('custom-switcher-element', { content: true }) }, itemsNames === null || itemsNames === void 0 ? void 0 : itemsNames.join(', ')),
        renderClear &&
            renderClear({
                renderIcon: () => (react_1.default.createElement(uikit_1.Icon, { data: Close_1.Close, size: CLEAR_ICON_SIZE, className: b('clear') })),
            }),
        hasCounter && (react_1.default.createElement("div", { className: b('custom-switcher-element', { counter: true }) }, itemsNames.length)),
        react_1.default.createElement("div", { className: b('custom-switcher-element', { arrow: true }) },
            react_1.default.createElement(uikit_1.Icon, { data: DropdownArrow_1.DropdownArrow, size: ICON_SIZE, className: b('switcher-arrow') }))));
};
exports.CustomSwitcher = CustomSwitcher;