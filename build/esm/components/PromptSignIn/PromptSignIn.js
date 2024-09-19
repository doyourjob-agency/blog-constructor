import { __rest } from "tslib";
import React from 'react';
import { Keyset, i18n } from '../../i18n';
import { Prompt } from '../Prompt/Prompt';
/**
 * Authentication Popup that appears when user action requires login
 * @returns {JSX|null}
 */
export const PromptSignIn = (_a) => {
    var { text = i18n(Keyset.PromptSignInOnLike), onClickSignIn = () => alert(i18n(Keyset.SignIn)), actions = [
        {
            children: i18n(Keyset.SignIn),
            onClick: onClickSignIn,
            size: 'l',
        },
    ] } = _a, props = __rest(_a, ["text", "onClickSignIn", "actions"]);
    return React.createElement(Prompt, Object.assign({}, { text, actions }, props));
};