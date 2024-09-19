import React from 'react';
import { block } from '../../../../utils/cn';
import './CustomSelectOption.css';
const b = block('feed-custom-select-option');
export const CustomSelectOption = ({ data }) => (React.createElement("div", { className: b() },
    React.createElement("span", { className: b('icon') }, data.icon),
    React.createElement("span", null, data.content)));