import { __rest } from "tslib";
import React from 'react';
import { Keyset, i18 } from '../../i18n';
import { Prompt } from '../Prompt/Prompt';
/**
 * Authentication Popup that appears when user action requires login
 * @returns {JSX|null}
 */
export const PromptSignIn = (_a) => {
    var { text = i18(Keyset.PromptSignInOnLike), onClickSignIn = () => alert(i18(Keyset.SignIn)), actions = [
        {
            children: i18(Keyset.SignIn),
            onClick: onClickSignIn,
            size: 'l',
        },
    ] } = _a, props = __rest(_a, ["text", "onClickSignIn", "actions"]);
    return React.createElement(Prompt, Object.assign({}, { text, actions }, props));
};