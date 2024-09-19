import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useAnalytics } from '@gravity-ui/page-constructor';
import { Button, Icon, Select } from '@gravity-ui/uikit';
import { DefaultGoalIds } from '../../../../constants';
import { LikesContext } from '../../../../contexts/LikesContext';
import { MobileContext } from '../../../../contexts/MobileContext';
import { AnalyticsCounter } from '../../../../counters/utils';
import { Keyset, i18n } from '../../../../i18n';
import { Save } from '../../../../icons/Save';
import { DefaultEventNames } from '../../../../models/common';
import { block } from '../../../../utils/cn';
import { Search } from '../../../Search/Search';
import { prepareAnalyticsEvent } from '../../../../utils/common';
import { renderFilter, renderOption, renderSwitcher } from './customRenders';
import './Controls.css';
const b = block('feed-controls');
const ICON_SIZE = 16;
const DEFAULT_PAGE = 1;
const VIRTUALIZATION_THRESHOLD = 1000;
export const Controls = ({ handleLoadData, tags = [], services = [], queryParams, }) => {
    const { hasLikes } = useContext(LikesContext);
    const handleAnalyticsTag = useAnalytics(DefaultEventNames.Tag);
    const handleAnalyticsService = useAnalytics(DefaultEventNames.Service);
    const handleAnalyticsSaveOnly = useAnalytics(DefaultEventNames.SaveOnly);
    const { savedOnly: savedOnlyInitial, search: searchInitial, tags: tagInitial, services: servicesInitial, } = queryParams || {};
    const [savedOnly, setSavedOnly] = useState(savedOnlyInitial === 'true');
    const [search, setSearch] = useState(searchInitial);
    useEffect(() => {
        setSearch(searchInitial);
    }, [searchInitial]);
    const isMobile = useContext(MobileContext);
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
        setSearch(searchValue);
        handleLoadData({
            page: DEFAULT_PAGE,
            query: { search: searchValue, page: DEFAULT_PAGE },
        });
    };
    const handleTagSelect = (selectedTags) => {
        const event = prepareAnalyticsEvent({
            name: DefaultGoalIds.tag,
            counter: AnalyticsCounter.CrossSite,
        });
        handleAnalyticsTag(event, {
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
        const forAnalyticsServices = services.filter((service) => {
            return selectedServices.includes(service.value);
        });
        const servicesAsStringForAnalytics = forAnalyticsServices
            .map((service) => service.content)
            .join(',');
        const event = prepareAnalyticsEvent({
            name: DefaultGoalIds.service,
            counter: AnalyticsCounter.CrossSite,
        });
        handleAnalyticsService(event, {
            service: servicesAsStringForAnalytics,
        });
        const servicesAsString = selectedServices.join(',');
        handleLoadData({
            page: DEFAULT_PAGE,
            query: { services: servicesAsString, page: DEFAULT_PAGE },
        });
    };
    const tagsItems = useMemo(() => [{ value: 'empty', content: i18n(Keyset.AllTags) }, ...tags], [tags]);
    const servicesItems = useMemo(() => (servicesInitial ? [...servicesInitial.split(',')] : []), [servicesInitial]);
    return (React.createElement("div", { className: b('header') },
        React.createElement("h1", { className: b('header-item', { title: true }) }, i18n(Keyset.Title)),
        React.createElement("div", { className: b('header-item', { filters: true }) },
            React.createElement("div", { className: b('filter-item') },
                React.createElement(Search, { className: b('search'), placeholder: i18n(Keyset.Search), initialValue: search && typeof search === 'string' ? search : '', onSubmit: handleSearch, debounce: 0 })),
            React.createElement("div", { className: b('filter-item') },
                React.createElement(Select, { className: b('select'), size: "xl", options: tagsItems, defaultValue: [tagInitial], onUpdate: handleTagSelect, placeholder: i18n(Keyset.AllTags), popupClassName: b('popup', { isMobile }), renderControl: renderSwitcher({
                        initial: [tagInitial],
                        list: tagsItems,
                        defaultLabel: i18n(Keyset.AllTags),
                    }), disablePortal: true, virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption })),
            services.length > 0 ? (React.createElement("div", { className: b('filter-item') },
                React.createElement(Select, { className: b('select'), size: "xl", multiple: true, filterable: true, hasClear: true, disablePortal: true, options: services, defaultValue: servicesItems, popupClassName: b('popup', { isMobile }), onUpdate: handleServicesSelect, placeholder: i18n(Keyset.AllServices), renderControl: renderSwitcher({
                        initial: servicesItems,
                        list: services,
                        defaultLabel: i18n(Keyset.AllServices),
                    }), virtualizationThreshold: VIRTUALIZATION_THRESHOLD, renderOption: renderOption, renderFilter: renderFilter }))) : null,
            hasLikes ? (React.createElement("div", { className: b('filter-item', { 'width-auto': true }) },
                React.createElement(Button, { view: 'outlined', className: b('saved-only-button', { savedOnly }), size: "xl", onClick: handleSavedOnly, selected: savedOnly },
                    React.createElement(Icon, { data: Save, size: ICON_SIZE, className: b('icon', { savedOnly }) }),
                    i18n(Keyset.ActionSavedOnly)))) : null)));
};