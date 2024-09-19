import React, { ReactNode } from 'react';
import { FetchArgs, Query, SetQueryType } from '../../../../models/common';
export type SelectItem = {
    content: string;
    value: string;
    icon?: ReactNode;
};
export type ControlsProps = {
    handleLoadData: (props: FetchArgs) => void;
    tags?: SelectItem[];
    services?: SelectItem[];
    queryParams: Query;
    setQuery?: SetQueryType;
};
export declare const Controls: ({ handleLoadData, tags, services, queryParams, }: ControlsProps) => React.JSX.Element;
