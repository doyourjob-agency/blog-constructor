import React from 'react';
import '../PostInfo.css';
type SharingProps = {
    theme?: 'light' | 'dark';
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    metrikaGoal?: string;
};
export declare const Sharing: ({ theme, metrikaGoal }: SharingProps) => React.JSX.Element;
export {};
