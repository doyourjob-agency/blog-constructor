import React from 'react';
import { SelectOption, SelectProps } from '@gravity-ui/uikit';
import { CustomSwitcherProps } from '../CustomSwitcher/CustomSwitcher';
type RenderSwitcherType = ({ initial, list, defaultLabel, }: {
    initial: CustomSwitcherProps['initial'];
    list: CustomSwitcherProps['list'];
    defaultLabel: string;
}) => SelectProps['renderControl'];
export declare const renderSwitcher: RenderSwitcherType;
export declare const renderFilter: SelectProps['renderFilter'];
export declare const renderOption: (option: SelectOption) => React.JSX.Element;
export {};
