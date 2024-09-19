import React from 'react';
export interface SettingsContextProps {
    addNavigationLinkForPages?: boolean;
    getBlogPath?: (pathPrefix: string) => string;
}
export declare const SettingsContext: React.Context<SettingsContextProps>;
