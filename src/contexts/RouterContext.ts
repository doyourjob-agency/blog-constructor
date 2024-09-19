import React from 'react';

import {Query} from '../models/common';

export interface RouterContextProps {
    pathname: string;
    as: string;
    hostname: string;
    query?: Query;
    updateQueryCallback: (query: Query) => void;
    setFunctionUpdateQueryBeforeHandleLoad?: (callback: (payload: Query) => void) => Promise<void>;
}

export const RouterContext = React.createContext<RouterContextProps>({} as RouterContextProps);
