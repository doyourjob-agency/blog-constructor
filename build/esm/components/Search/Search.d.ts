import React from 'react';
import { ClassNameProps } from '../../models/common';
import './Search.css';
export type SearchSize = 's' | 'm';
interface SearchProps extends ClassNameProps {
    value?: string;
    initialValue: string;
    onSubmit: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    size?: SearchSize;
    autoFocus?: boolean;
    className?: string;
}
/**
 * Search component, placed on blog main page,
 * based on TextInput from uikit
 *
 * @returns {JSX|null}
 */
export declare const Search: ({ className, initialValue, onSubmit, debounce, placeholder, size, autoFocus, value: externalValue, }: SearchProps) => React.JSX.Element;
export {};
