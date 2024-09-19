import { __rest } from "tslib";
import React from 'react';
import { Media as PCMedia, YFMWrapper } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import './Media.css';
const b = block('media');
export const Media = (_a) => {
    var { text, paddingTop, paddingBottom } = _a, mediaProps = __rest(_a, ["text", "paddingTop", "paddingBottom"]);
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, className: b('container') },
        React.createElement("div", { className: b('border'), "data-qa": "blog-media-content" },
            React.createElement(PCMedia, Object.assign({ className: b('content'), videoClassName: b('video'), imageClassName: b('image') }, mediaProps))),
        text && (React.createElement("div", { className: b('text-content') },
            React.createElement(YFMWrapper, { content: text, modifiers: {
                    blog: true,
                    blogMedia: true,
                    resetPaddings: true,
                } })))));
};