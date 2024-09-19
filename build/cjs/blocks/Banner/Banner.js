"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const constants_1 = require("../../constants");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const common_1 = require("../../utils/common");
const b = (0, cn_1.block)('banner');
const BANNER_CUSTOM_QA_ATTRIBUTES = ['image-container'];
const Banner = (_a) => {
    var _b;
    var { color, imageSize = 's', image, paddingTop, paddingBottom, qa } = _a, content = tslib_1.__rest(_a, ["color", "imageSize", "image", "paddingTop", "paddingBottom", "qa"]);
    const contentStyle = {};
    const qaAttributes = (0, common_1.getQaAttributes)(qa, BANNER_CUSTOM_QA_ATTRIBUTES);
    if (color) {
        contentStyle.backgroundColor = color;
    }
    const contentData = (0, common_1.updateContentSizes)(content);
    /**
     * @deprecated Metrika will be deleted after launch of analyticsEvents
     */
    const metrikaGoal = {
        name: constants_1.BlogMetrikaGoalIds.bannerCommon,
        isCrossSite: true,
    };
    (_b = contentData.buttons) === null || _b === void 0 ? void 0 : _b.forEach((button) => {
        // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
        button.metrikaGoals = (0, common_1.getBlogElementMetrika)(metrikaGoal, button.metrikaGoals);
    });
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper, className: b('container') },
        react_1.default.createElement("div", { className: b('content'), style: contentStyle, "data-qa": qaAttributes.content },
            react_1.default.createElement("div", { className: b('info') },
                react_1.default.createElement(page_constructor_1.Content, Object.assign({}, contentData, { qa: qaAttributes.content }))),
            image && (react_1.default.createElement("div", { className: b('image-container', { ['image-size']: imageSize }), "data-qa": qaAttributes.imageContainer },
                react_1.default.createElement(page_constructor_1.Image, { className: b('image'), src: image }))))));
};
exports.Banner = Banner;