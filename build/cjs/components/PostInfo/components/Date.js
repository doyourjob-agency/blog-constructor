"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const LocaleContext_1 = require("../../../contexts/LocaleContext");
const common_1 = require("../../../models/common");
const cn_1 = require("../../../utils/cn");
const date_1 = require("../../../utils/date");
const b = (0, cn_1.block)('post-info');
const Date = ({ date, size = common_1.PostCardSize.SMALL, id, qa }) => {
    const { locale } = (0, react_1.useContext)(LocaleContext_1.LocaleContext);
    return (react_1.default.createElement("div", { className: b('item', { size }), id: id, "data-qa": qa }, (0, date_1.format)(date, 'longDate', locale === null || locale === void 0 ? void 0 : locale.code)));
};
exports.Date = Date;