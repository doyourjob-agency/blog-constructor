"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sharing = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("@gravity-ui/components");
const page_constructor_1 = require("@gravity-ui/page-constructor");
const MobileContext_1 = require("../../../contexts/MobileContext");
const PostPageContext_1 = require("../../../contexts/PostPageContext");
const RouterContext_1 = require("../../../contexts/RouterContext");
const metrika_1 = tslib_1.__importDefault(require("../../../counters/metrika"));
const utils_1 = require("../../../counters/utils");
const i18n_1 = require("../../../i18n");
const ShareArrowUp_1 = require("../../../icons/ShareArrowUp");
const common_1 = require("../../../models/common");
const cn_1 = require("../../../utils/cn");
const common_2 = require("../../../utils/common");
const b = (0, cn_1.block)('post-info');
const Sharing = ({ theme, metrikaGoal }) => {
    const router = (0, react_1.useContext)(RouterContext_1.RouterContext);
    const isMobile = (0, react_1.useContext)(MobileContext_1.MobileContext);
    const { shareOptions } = (0, react_1.useContext)(PostPageContext_1.PostPageContext);
    const handleAnalyticsGlobal = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.ShareButton);
    const handleMetrika = (0, react_1.useCallback)(() => {
        metrika_1.default.reachGoal(utils_1.MetrikaCounter.CrossSite, metrikaGoal);
    }, [metrikaGoal]);
    const handleAnalytics = (0, react_1.useCallback)(() => {
        handleAnalyticsGlobal();
        handleMetrika();
    }, [handleAnalyticsGlobal, handleMetrika]);
    return (react_1.default.createElement("div", { className: b('item') },
        react_1.default.createElement("div", { className: b('icon') },
            react_1.default.createElement(components_1.SharePopover, { url: (0, common_2.getAbsolutePath)(router), className: b('share'), iconClass: b('share-icon'), switcherClassName: b('switcher', { theme }), tooltipClassName: b('popup'), useWebShareApi: isMobile, direction: components_1.ShareLayoutDirection.Column, buttonTitle: (0, i18n_1.i18)(i18n_1.Keyset.ActionShare), customIcon: ShareArrowUp_1.ShareArrowUp, placement: "bottom", openByHover: false, shareOptions: shareOptions, onClick: handleAnalytics }))));
};
exports.Sharing = Sharing;