"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingTime = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const i18n_1 = require("../../../i18n");
const Time_1 = require("../../../icons/Time");
const cn_1 = require("../../../utils/cn");
const b = (0, cn_1.block)('post-info');
const ICON_SIZE = 16;
const ReadingTime = ({ readingTime, size = 's', id, qa }) => (react_1.default.createElement("div", { className: b('item', { size }), id: id, "data-qa": qa },
    react_1.default.createElement("span", { className: b('icon') },
        react_1.default.createElement(uikit_1.Icon, { data: Time_1.Time, size: ICON_SIZE, className: b('icon-color') })),
    (0, i18n_1.i18)(i18n_1.Keyset.ContextReadingTime, { count: readingTime })));
exports.ReadingTime = ReadingTime;