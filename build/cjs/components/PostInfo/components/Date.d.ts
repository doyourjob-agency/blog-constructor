import React from 'react';
import { PostCardSize, QAProps } from '../../../models/common';
type DateProps = QAProps & {
    date: string | number;
    size?: PostCardSize;
    id?: string;
};
export declare const Date: ({ date, size, id, qa }: DateProps) => React.JSX.Element;
export {};
