import React from 'react';
import { SelectProps } from '@gravity-ui/uikit';
import { SelectItem } from '../Controls/Controls';
type RenderControlParameters = Partial<Parameters<Required<SelectProps>['renderControl']>[0]>;
export type CustomSwitcherProps = {
    initial: (string | number | null)[];
    defaultLabel: string;
    list: SelectItem[];
    controlRef: RenderControlParameters['ref'];
} & Omit<RenderControlParameters, 'ref'>;
export declare const CustomSwitcher: ({ initial, defaultLabel, list, onClick, controlRef, onKeyDown, open, renderClear, }: CustomSwitcherProps) => React.JSX.Element;
export {};
