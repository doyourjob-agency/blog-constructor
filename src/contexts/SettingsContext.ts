import React from 'react';

export interface SettingsContextProps {
    addNavigationLinkForPages?: boolean;
    blogTitle?: string;
    getBlogPath?: (pathPrefix: string) => string;
}

export const SettingsContext = React.createContext<SettingsContextProps>({});
