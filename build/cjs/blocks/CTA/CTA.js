"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTA = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const constants_1 = require("../../constants");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const common_1 = require("../../utils/common");
const b = (0, cn_1.block)('cta');
const CTA = ({ items, paddingTop, paddingBottom, qa }) => {
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    const metrikaGoal = {
        name: constants_1.BlogMetrikaGoalIds.cta,
        isCrossSite: true,
    };
    const qaAttributes = (0, common_1.getQaAttributes)(qa, 'card');
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content'), qa: qaAttributes.wrapper }, items.map((content, index) => {
        var _a;
        const contentData = (0, common_1.updateContentSizes)(content);
        (_a = contentData.links) === null || _a === void 0 ? void 0 : _a.forEach((link) => {
            // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
            link.metrikaGoals = (0, common_1.getBlogElementMetrika)(metrikaGoal, link.metrikaGoals);
        });
        return (react_1.default.createElement("div", { key: index, className: b('card'), "data-qa": qaAttributes.card },
            react_1.default.createElement(page_constructor_1.Content, Object.assign({}, contentData, { qa: qaAttributes.content }))));
    })));
};
exports.CTA = CTA;