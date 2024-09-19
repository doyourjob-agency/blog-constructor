"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
/**
 * @deprecated Metrika will be deleted after launch of analyticsEvents
 */
const constants_1 = require("../../../../constants");
const LikesContext_1 = require("../../../../contexts/LikesContext");
const MobileContext_1 = require("../../../../contexts/MobileContext");
const metrika_1 = tslib_1.__importDefault(require("../../../../counters/metrika"));
const utils_1 = require("../../../../counters/utils");
const i18n_1 = require("../../../../i18n");
const Save_1 = require("../../../../icons/Save");
const common_1 = require("../../../../models/common");
const cn_1 = require("../../../../utils/cn");
const Search_1 = require("../../../Search/Search");
const customRenders_1 = require("./customRenders");
const b = (0, cn_1.block)('feed-controls');
const ICON_SIZE = 16;
const DEFAULT_PAGE = 1;
const VIRTUALIZATION_THRESHOLD = 1000;
const Controls = ({ handleLoadData, tags = [], services = [], queryParams, }) => {
    const { hasLikes } = (0, react_1.useContext)(LikesContext_1.LikesContext);
    const handleAnalyticsTag = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.Tag);
    const handleAnalyticsService = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.Service);
    const handleAnalyticsSaveOnly = (0, page_constructor_1.useAnalytics)(common_1.DefaultEventNames.SaveOnly);
    const { savedOnly: savedOnlyInitial, search: searchInitial, tags: tagInitial, services: servicesInitial, } = queryParams || {};
    const [savedOnly, setSavedOnly] = (0, react_1.useState)(savedOnlyInitial === 'true');
    const isMobile = (0, react_1.useContext)(MobileContext_1.MobileContext);
    const handleSavedOnly = () => {
        handleAnalyticsSaveOnly();
        setSavedOnly(!savedOnly);
        handleLoadData({
            page: DEFAULT_PAGE,
            query: {
                savedOnly: savedOnly ? '' : 'true',
                search: '',
                tags: '',
                page: DEFAULT_PAGE,
                services: '',
            },
        });
    };
    const handleSearch = (searchValue) => {
        handleLoadData({
            page: DEFAULT_PAGE,
            query: { search: searchValue, page: DEFAULT_PAGE },
        });
    };
    const handleTagSelect = (selectedTags) => {
        /**
         * @deprecated Metrika will be deleted after launch of analyticsEvents
         */
        metrika_1.default.reachGoal(utils_1.MetrikaCounter.CrossSite, constants_1.BlogMetrikaGoalIds.tag, {
            theme: selectedTags[0],
        });
        handleAnalyticsTag(null, {
            theme: selectedTags[0],
        });
        const isEmptyTag = selectedTags.some((tag) => tag === 'empty');
        handleLoadData({
            page: DEFAULT_PAGE,
            query: {
                tags: isEmptyTag ? '' : selectedTags[0],
                page: DEFAULT_PAGE,
            },
        });
    };
    const handleServicesSelect = (selectedServices) => {
        const forMetrikaServices = services.filter((service) => {
            return selectedServices.includes(service.value);
        });
        const metrikaAsString = forMetrikaServices.map((service) => service.content).join(',');
        /**
         * @deprecated Metrika will be deleted after launch of analyticsEvents
         */
        metrika_1.default.reachGoal(utils_1.MetrikaCounter.CrossSite, constants_1.BlogMetrikaGoalIds.service, {
            service: metrikaAsString,
        });
        handleAnalyticsService(null, {
            service: metrikaAsString,
        });
        const servicesAsString = selectedServices.join(',');
        handleLoadData({
            page: DEFAULT_PAGE,
            query: { services: servicesAsString, page: DEFAULT_PAGE },
        });
    };
    const tagsItems = (0, react_1.useMemo)(() => [{ value: 'empty', content: (0, i18n_1.i18)(i18n_1.Keyset.AllTags) }, ...tags], [tags]);
    const servicesItems = (0, react_1.useMemo)(() => (servicesInitial ? [...servicesInitial.split(',')] : []), [servicesInitial]);
    return (react_1.default.createElement("div", { className: b('header') },
        react_1.default.createElement("h1", { className: b('header-item', { title: true }) }, (0, i18n_1.i18)(i18n_1.Keyset.Title)),
        react_1.default.createElement("div", { className: b('header-item', { filters: true }) },
            react_1.default.createElement("div", { className: b('filter-item') },
                react_1.default.createElement(Search_1.Search, { className: b('search'), placeholder: (0, i18n_1.i18)(i18n_1.Keyset.Search), initialValue: searchInitial && typeof searchInitial === 'string' ? searchInitial : '', onSubmit: handleSearch, debounce: 0 })),
            react_1.default.createElement("div", { className: b('filter-item') },
                react_1.default.createElement(uikit_1.Select, { className: b('select'), size: "xl", options: tagsItems, defaultValue: [tagInitial], value: [tagInitial], onUpdate: handleTagSelect, placeholder: (0, i18n_1.i18)(i18n_1.Keyset.AllTags), popupClassName: b('popup', { isMobile }), renderControl: (0, customRenders_1.renderSwitcher)({
                        initial: [tagInitial],
                        list: tagsItems,
                        defaultLabel: (0, i18n_1.i18)(i18n_1.Keyset.AllTags),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: customRenders_1.renderOption })),
            services.length > 0 ? (react_1.default.createElement("div", { className: b('filter-item') },
                react_1.default.createElement(uikit_1.Select, { className: b('select'), size: "xl", multiple: true, filterable: true, hasClear: true, disablePortal: true, options: services, defaultValue: servicesItems, value: servicesItems, popupClassName: b('popup', { isMobile }), onUpdate: handleServicesSelect, placeholder: (0, i18n_1.i18)(i18n_1.Keyset.AllServices), renderControl: (0, customRenders_1.renderSwitcher)({
                        initial: servicesItems,
                        list: services,
                        defaultLabel: (0, i18n_1.i18)(i18n_1.Keyset.AllServices),
                    }), virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: customRenders_1.renderOption, renderFilter: customRenders_1.renderFilter }))) : null,
            hasLikes ? (react_1.default.createElement("div", { className: b('filter-item', { 'width-auto': true }) },
                react_1.default.createElement(uikit_1.Button, { view: 'outlined', className: b('saved-only-button', { savedOnly }), size: "xl", onClick: handleSavedOnly },
                    react_1.default.createElement(uikit_1.Icon, { data: Save_1.Save, size: ICON_SIZE, className: b('icon', { savedOnly }) }),
                    (0, i18n_1.i18)(i18n_1.Keyset.ActionSavedOnly)))) : null)));
};
exports.Controls = Controls;