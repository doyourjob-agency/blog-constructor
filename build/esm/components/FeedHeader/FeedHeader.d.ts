import React from 'react';
import { ClassNameProps, HeaderBlockProps } from '../../models/common';
import { ControlsProps } from './components/Controls/Controls';
import './FeedHeader.css';
type HeaderProps = Pick<HeaderBlockProps, 'background' | 'offset' | 'theme' | 'verticalOffset'>;
type FeedHeaderProps = HeaderProps & ControlsProps;
type FeedHeaderContainerProps = FeedHeaderProps & ClassNameProps;
export declare const FeedHeader: ({ tags, services, handleLoadData, offset, background, theme, verticalOffset, className, queryParams, }: FeedHeaderContainerProps) => React.JSX.Element;
export {};
