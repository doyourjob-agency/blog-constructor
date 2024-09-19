import React from 'react';
import { ArrowType } from '../types';
import '../Paginator.css';
export type NavigationButtonProps = {
    arrowType: ArrowType;
    disabled?: boolean;
};
export declare const NavigationButton: ({ arrowType, disabled }: NavigationButtonProps) => React.JSX.Element | null;
