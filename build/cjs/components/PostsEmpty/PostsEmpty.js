"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsEmpty = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const i18n_1 = require("../../i18n");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('posts-empty');
const PostsEmpty = () => (react_1.default.createElement("div", { className: b('container') },
    react_1.default.createElement("div", { className: b('title') }, (0, i18n_1.i18)(i18n_1.Keyset.TitleEmptyContainer)),
    react_1.default.createElement("div", { className: b('subtitle') }, (0, i18n_1.i18)(i18n_1.Keyset.ContextEmptyContainer))));
exports.PostsEmpty = PostsEmpty;