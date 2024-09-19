import { __rest } from "tslib";
import React from 'react';
import { Content, Image } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import { getMergedAnalyticsEvents, getQaAttributes, prepareAnalyticsEvent, updateContentSizes, } from '../../utils/common';
import { DefaultGoalIds } from '../../constants';
import { AnalyticsCounter } from '../../counters/utils';
import './Banner.css';
const b = block('banner');
const BANNER_CUSTOM_QA_ATTRIBUTES = ['image-container'];
const buttonGoals = prepareAnalyticsEvent({
    name: DefaultGoalIds.bannerCommon,
    counter: AnalyticsCounter.CrossSite,
});
export const Banner = (_a) => {
    var _b;
    var { color, imageSize = 's', image, paddingTop, paddingBottom, qa } = _a, content = __rest(_a, ["color", "imageSize", "image", "paddingTop", "paddingBottom", "qa"]);
    const contentStyle = {};
    const qaAttributes = getQaAttributes(qa, BANNER_CUSTOM_QA_ATTRIBUTES);
    if (color) {
        contentStyle.backgroundColor = color;
    }
    const contentData = updateContentSizes(content);
    (_b = contentData.buttons) === null || _b === void 0 ? void 0 : _b.forEach((button) => {
        // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
        button.analyticsEvents = getMergedAnalyticsEvents(buttonGoals, button.analyticsEvents);
    });
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper, className: b('container') },
        React.createElement("div", { className: b('content'), style: contentStyle, "data-qa": qaAttributes.content },
            React.createElement("div", { className: b('info') },
                React.createElement(Content, Object.assign({}, contentData, { qa: qaAttributes.content }))),
            image && (React.createElement("div", { className: b('image-container', { ['image-size']: imageSize }), "data-qa": qaAttributes.imageContainer },
                React.createElement(Image, { className: b('image'), src: image }))))));
};