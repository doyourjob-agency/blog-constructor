import React from 'react';
import { Content } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { BlogMetrikaGoalIds } from '../../constants';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import { getBlogElementMetrika, getQaAttributes, updateContentSizes } from '../../utils/common';
import './CTA.css';
const b = block('cta');
export const CTA = ({ items, paddingTop, paddingBottom, qa }) => {
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    const metrikaGoal = {
        name: BlogMetrikaGoalIds.cta,
        isCrossSite: true,
    };
    const qaAttributes = getQaAttributes(qa, 'card');
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content'), qa: qaAttributes.wrapper }, items.map((content, index) => {
        var _a;
        const contentData = updateContentSizes(content);
        (_a = contentData.links) === null || _a === void 0 ? void 0 : _a.forEach((link) => {
            // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
            link.metrikaGoals = getBlogElementMetrika(metrikaGoal, link.metrikaGoals);
        });
        return (React.createElement("div", { key: index, className: b('card'), "data-qa": qaAttributes.card },
            React.createElement(Content, Object.assign({}, contentData, { qa: qaAttributes.content }))));
    })));
};