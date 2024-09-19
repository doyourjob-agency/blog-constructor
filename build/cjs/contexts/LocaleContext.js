"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const locale_1 = require("../models/locale");
exports.LocaleContext = react_1.default.createContext({
    locale: {
        code: 'en-En',
        lang: locale_1.Lang.En,
        langName: 'English',
        pathPrefix: 'en',
    },
});