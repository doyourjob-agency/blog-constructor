import React from 'react';

import {YFMWrapper} from '@doyourjob/gravity-ui-page-constructor';

import {Wrapper} from '../../components/Wrapper/Wrapper';
import {YFMProps} from '../../models/blocks';
import {PaddingsDirections} from '../../models/paddings';
import {block, cn} from '../../utils/cn';
import {getQaAttributes} from '../../utils/common';

import './YFM.scss';

const b = cn('yfm');
const byfm = block('blog-yfm-block');

export const YFM = (props: YFMProps) => {
    const {text, textSize, paddingTop, paddingBottom, qa} = props;
    const qaAttributes = getQaAttributes(qa);

    return (
        <Wrapper
            paddings={{
                [PaddingsDirections.top]: paddingTop,
                [PaddingsDirections.bottom]: paddingBottom,
            }}
            qa={qaAttributes.wrapper}
        >
            <YFMWrapper
                content={text}
                modifiers={{
                    blog: true,
                    resetPaddings: true,
                }}
                className={b({'no-list-reset': true}, byfm({size: textSize}))}
            />
        </Wrapper>
    );
};
