import React from 'react';
import { Lang } from '../models/locale';
export const LocaleContext = React.createContext({
    locale: {
        code: 'en-En',
        lang: Lang.En,
        langName: 'English',
        pathPrefix: 'en',
    },
});