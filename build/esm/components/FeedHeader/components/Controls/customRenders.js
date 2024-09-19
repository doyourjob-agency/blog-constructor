import React from 'react';
import { TextInput } from '@gravity-ui/uikit';
import { Keyset, i18 } from '../../../../i18n';
import { block } from '../../../../utils/cn';
import { CustomSelectOption, } from '../CustomSelectOption/CustomSelectOption';
import { CustomSwitcher } from '../CustomSwitcher/CustomSwitcher';
import './Controls.css';
const b = block('feed-controls');
export const renderSwitcher = ({ initial, list, defaultLabel }) => 
// eslint-disable-next-line react/display-name
({ onClick, ref, onKeyDown, open, renderClear }) => (React.createElement(CustomSwitcher, { initial: initial, defaultLabel: defaultLabel, list: list, controlRef: ref, onClick: onClick, onKeyDown: onKeyDown, renderClear: renderClear, open: open }));
export const renderFilter = ({ value, onChange, onKeyDown }) => (React.createElement(TextInput, { controlProps: { size: 1 }, value: value, view: "clear", placeholder: i18(Keyset.Search), onUpdate: onChange, onKeyDown: onKeyDown, className: b('popup-filter') }));
export const renderOption = (option) => (React.createElement(CustomSelectOption, { data: option }));