import React from 'react';
import { YFMWrapper } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { cn } from '../../utils/cn';
import { getQaAttributes } from '../../utils/common';
const b = cn('yfm');
export const YFM = (props) => {
    const { text, paddingTop, paddingBottom, qa } = props;
    const qaAttributes = getQaAttributes(qa);
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper },
        React.createElement(YFMWrapper, { content: text, modifiers: {
                blog: true,
                resetPaddings: true,
            }, className: b({ 'no-list-reset': true }) })));
};