"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const constants_1 = require("../../constants");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('wrapper');
const Wrapper = ({ children, paddings = constants_1.DEFAULT_PADDINGS, className, qa, }) => (react_1.default.createElement("section", { className: b({
        ['padding-top']: (paddings === null || paddings === void 0 ? void 0 : paddings.top) || 'xs',
        ['padding-bottom']: (paddings === null || paddings === void 0 ? void 0 : paddings.bottom) || 'l',
        ['padding-left']: (paddings === null || paddings === void 0 ? void 0 : paddings.left) || '',
        ['padding-right']: (paddings === null || paddings === void 0 ? void 0 : paddings.right) || '',
    }, className), "data-qa": qa }, children));
exports.Wrapper = Wrapper;