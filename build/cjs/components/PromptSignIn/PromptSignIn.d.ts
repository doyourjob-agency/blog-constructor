import React, { SyntheticEvent } from 'react';
import { PromptProps } from '../Prompt/Prompt';
export interface PromptSignInProps extends Partial<PromptProps> {
    onClickSignIn?: React.EventHandler<SyntheticEvent>;
}
/**
 * Authentication Popup that appears when user action requires login
 * @returns {JSX|null}
 */
export declare const PromptSignIn: ({ text, onClickSignIn, actions, ...props }: PromptSignInProps) => React.JSX.Element;
