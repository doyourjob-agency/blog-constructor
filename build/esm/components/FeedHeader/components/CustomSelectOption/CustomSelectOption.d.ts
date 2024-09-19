import React from 'react';
import { SelectOption as SelectOptionType } from '@gravity-ui/uikit';
import './CustomSelectOption.css';
export type CustomSelectOptionProps = {
    data: {
        icon?: React.ReactElement;
    } & SelectOptionType;
};
export declare const CustomSelectOption: ({ data }: CustomSelectOptionProps) => React.JSX.Element;
