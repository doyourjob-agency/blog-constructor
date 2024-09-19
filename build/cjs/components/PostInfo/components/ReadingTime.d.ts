import React from 'react';
import { QAProps } from '../../../models/common';
type ReadingTimeProps = QAProps & {
    readingTime: number;
    size?: 's' | 'm';
    id?: string;
};
export declare const ReadingTime: ({ readingTime, size, id, qa }: ReadingTimeProps) => React.JSX.Element;
export {};
