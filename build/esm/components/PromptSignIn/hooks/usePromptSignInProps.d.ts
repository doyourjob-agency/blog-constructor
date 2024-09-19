import React, { SyntheticEvent } from 'react';
export declare function usePromptSignInProps(onClickSignIn?: React.EventHandler<SyntheticEvent>): {
    onClickSignIn: ((event: React.SyntheticEvent<Element, Event>) => void) | undefined;
    openTimestamp: number;
    requireSignIn: (() => void) | undefined;
};
