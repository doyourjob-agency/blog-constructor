import { __rest } from "tslib";
import React from 'react';
import { BackgroundImage, Content } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import { getQaAttributes, updateContentSizes } from '../../utils/common';
import './ColoredText.css';
const b = block('colored-text');
export const ColoredText = (_a) => {
    var { background, paddingTop, paddingBottom, qa } = _a, content = __rest(_a, ["background", "paddingTop", "paddingBottom", "qa"]);
    const contentData = updateContentSizes(content);
    const qaAttributes = getQaAttributes(qa);
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper },
        React.createElement("div", { className: b('container'), style: { backgroundColor: (background === null || background === void 0 ? void 0 : background.color) || 'none' }, "data-qa": qaAttributes.container },
            React.createElement("div", { className: b('picture-container') }, (background === null || background === void 0 ? void 0 : background.image) && (React.createElement(BackgroundImage, { className: b('picture'), alt: background === null || background === void 0 ? void 0 : background.altText, src: background === null || background === void 0 ? void 0 : background.image }))),
            React.createElement("div", { className: b('text-content') },
                React.createElement(Content, Object.assign({}, contentData, { qa: qaAttributes.content }))))));
};