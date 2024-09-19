import React from 'react';
import { Query } from '../models/common';
export interface RouterContextProps {
    pathname: string;
    as: string;
    hostname: string;
    query?: Query;
    updateQueryCallback: (query: Query) => void;
    setFunctionUpdateQueryBeforeHandleLoad?: (callback: (payload: Query) => Promise<void>) => void;
}
export declare const RouterContext: React.Context<RouterContextProps>;
