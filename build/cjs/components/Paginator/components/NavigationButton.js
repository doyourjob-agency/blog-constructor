"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const i18n_1 = require("../../../i18n");
const cn_1 = require("../../../utils/cn");
const types_1 = require("../types");
const b = (0, cn_1.block)('paginator');
const NavigationButton = ({ arrowType, disabled }) => disabled ? null : (react_1.default.createElement("div", { className: b('icon') }, arrowType === types_1.ArrowType.Prev ? (0, i18n_1.i18n)(i18n_1.Keyset.ButtonBegin) : (0, i18n_1.i18n)(i18n_1.Keyset.ButtonFarther)));
exports.NavigationButton = NavigationButton;