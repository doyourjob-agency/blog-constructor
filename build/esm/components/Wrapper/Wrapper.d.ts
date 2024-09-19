import React from 'react';
import { ClassNameProps, QAProps } from '../../models/common';
import { Paddings } from '../../models/paddings';
import './Wrapper.css';
type WrapperProps = ClassNameProps & QAProps & {
    paddings?: Paddings;
    children?: React.ReactNode;
};
export declare const Wrapper: React.FunctionComponent<WrapperProps>;
export {};
