"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptSignIn = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const i18n_1 = require("../../i18n");
const Prompt_1 = require("../Prompt/Prompt");
/**
 * Authentication Popup that appears when user action requires login
 * @returns {JSX|null}
 */
const PromptSignIn = (_a) => {
    var { text = (0, i18n_1.i18)(i18n_1.Keyset.PromptSignInOnLike), onClickSignIn = () => alert((0, i18n_1.i18)(i18n_1.Keyset.SignIn)), actions = [
        {
            children: (0, i18n_1.i18)(i18n_1.Keyset.SignIn),
            onClick: onClickSignIn,
            size: 'l',
        },
    ] } = _a, props = tslib_1.__rest(_a, ["text", "onClickSignIn", "actions"]);
    return react_1.default.createElement(Prompt_1.Prompt, Object.assign({}, { text, actions }, props));
};
exports.PromptSignIn = PromptSignIn;