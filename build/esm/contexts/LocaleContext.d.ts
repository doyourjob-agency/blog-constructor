import React from 'react';
import { Locale } from '../models/locale';
export type LocaleContextProps = {
    locale: Locale;
};
export declare const LocaleContext: React.Context<LocaleContextProps>;
