import React from 'react';
import { Lang } from '@gravity-ui/uikit';
export const LocaleContext = React.createContext({
    locale: {
        code: 'en-En',
        lang: Lang.En,
        langName: 'English',
        pathPrefix: 'en',
    },
});