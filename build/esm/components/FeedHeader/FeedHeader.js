import React from 'react';
import { BackgroundImage, FullWidthBackground, Grid, getThemedValue, } from '@gravity-ui/page-constructor';
import { block } from '../../utils/cn';
import { Controls } from './components/Controls/Controls';
import './FeedHeader.css';
const b = block('feed-header');
export const FeedHeader = ({ tags, services, handleLoadData, offset = 'default', background, theme = 'light', verticalOffset = 'l', className, queryParams, }) => {
    const backgroundThemed = background && getThemedValue(background, theme);
    return (React.createElement("header", { className: b('header', { ['has-background']: Boolean(background) }, className) },
        (backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.color) ? (React.createElement(FullWidthBackground, { style: { backgroundColor: backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.color }, theme: "rounded" })) : null,
        React.createElement(Grid, { className: b('content', { offset, theme, 'vertical-offset': verticalOffset }) },
            backgroundThemed ? (React.createElement(BackgroundImage, { src: backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.url, className: b('background'), imageClassName: b('background-img'), style: {
                    backgroundColor: backgroundThemed.fullWidth
                        ? ''
                        : backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.color,
                }, disableCompress: backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.disableCompress })) : null,
            React.createElement(Controls, { tags: tags, services: services, handleLoadData: handleLoadData, queryParams: queryParams }))));
};