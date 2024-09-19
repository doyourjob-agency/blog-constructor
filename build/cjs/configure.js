"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const i18n_1 = require("./i18n");
const configure = ({ lang }) => {
    i18n_1.i18n.setLang(lang);
};
exports.configure = configure;