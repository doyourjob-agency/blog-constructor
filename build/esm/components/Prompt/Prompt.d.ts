import React from 'react';
import { ButtonProps } from '@gravity-ui/uikit';
import './Prompt.css';
export interface PromptProps {
    text: string;
    actions: ButtonProps[];
    openTimestamp?: number;
    openDuration?: number;
    className?: string;
    theme?: 'grey' | 'beige' | 'white';
}
/**
 * Popup that appears with text message and button(s) for given `actions`.
 * Features:
 *  - Automatically disappears after `openDuration` in milliseconds
 *  - `openTimestamp` (`Date.now()`) resets the visible duration
 * @returns {JSX|null}
 */
export declare const Prompt: ({ text, actions, className, openTimestamp, openDuration, theme, }: PromptProps) => React.JSX.Element;
