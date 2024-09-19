"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsError = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const i18n_1 = require("../../i18n");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('posts-error');
const PostsError = ({ onButtonClick }) => {
    const handleClick = () => (onButtonClick ? onButtonClick() : window.location.reload());
    return (react_1.default.createElement("div", { className: b('container') },
        react_1.default.createElement("div", { className: b('title') }, (0, i18n_1.i18n)(i18n_1.Keyset.ErrorTitle)),
        react_1.default.createElement("div", { className: b('subtitle') }, (0, i18n_1.i18n)(i18n_1.Keyset.PostLoadError)),
        react_1.default.createElement("div", { className: b('button') },
            react_1.default.createElement(uikit_1.Button, { size: "xl", view: "outlined", onClick: handleClick }, (0, i18n_1.i18n)(i18n_1.Keyset.ActionTryAgain)))));
};
exports.PostsError = PostsError;