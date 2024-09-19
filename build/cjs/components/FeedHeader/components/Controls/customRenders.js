"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOption = exports.renderFilter = exports.renderSwitcher = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const i18n_1 = require("../../../../i18n");
const cn_1 = require("../../../../utils/cn");
const CustomSelectOption_1 = require("../CustomSelectOption/CustomSelectOption");
const CustomSwitcher_1 = require("../CustomSwitcher/CustomSwitcher");
const b = (0, cn_1.block)('feed-controls');
const renderSwitcher = ({ initial, list, defaultLabel }) => 
// eslint-disable-next-line react/display-name
({ onClick, ref, onKeyDown, open, renderClear, popupId, activeIndex }) => (react_1.default.createElement(CustomSwitcher_1.CustomSwitcher, { initial: initial, defaultLabel: defaultLabel, list: list, controlRef: ref, onClick: onClick, onKeyDown: onKeyDown, renderClear: renderClear, open: open, popupId: popupId, activeIndex: activeIndex }));
exports.renderSwitcher = renderSwitcher;
const renderFilter = ({ value, onChange, onKeyDown }) => (react_1.default.createElement(uikit_1.TextInput, { controlProps: { size: 1 }, value: value, view: "clear", placeholder: (0, i18n_1.i18n)(i18n_1.Keyset.Search), onUpdate: onChange, onKeyDown: onKeyDown, className: b('popup-filter') }));
exports.renderFilter = renderFilter;
const renderOption = (option) => (react_1.default.createElement(CustomSelectOption_1.CustomSelectOption, { data: option }));
exports.renderOption = renderOption;