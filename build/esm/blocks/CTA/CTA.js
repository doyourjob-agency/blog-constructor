import React from 'react';
import { Content } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import { getMergedAnalyticsEvents, getQaAttributes, prepareAnalyticsEvent, updateContentSizes, } from '../../utils/common';
import { DefaultGoalIds } from '../../constants';
import { AnalyticsCounter } from '../../counters/utils';
import './CTA.css';
const b = block('cta');
const linkGoals = prepareAnalyticsEvent({
    name: DefaultGoalIds.cta,
    counter: AnalyticsCounter.CrossSite,
});
export const CTA = ({ items, paddingTop, paddingBottom, qa }) => {
    const qaAttributes = getQaAttributes(qa, 'card');
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content'), qa: qaAttributes.wrapper }, items.map((content, index) => {
        var _a;
        const contentData = updateContentSizes(content);
        (_a = contentData.links) === null || _a === void 0 ? void 0 : _a.forEach((link) => {
            // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
            link.analyticsEvents = getMergedAnalyticsEvents(linkGoals, link.analyticsEvents);
        });
        return (React.createElement("div", { key: index, className: b('card'), "data-qa": qaAttributes.card },
            React.createElement(Content, Object.assign({}, contentData, { qa: qaAttributes.content }))));
    })));
};