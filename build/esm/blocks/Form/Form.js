import { __rest } from "tslib";
import React, { useState } from 'react';
import { InnerForm } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import './Form.css';
const b = block('form-block');
export const Form = (_a) => {
    var { paddingTop, paddingBottom } = _a, props = __rest(_a, ["paddingTop", "paddingBottom"]);
    const { formData, border = 'shadow' } = props;
    const [contentLoaded, setContentLoaded] = useState(false);
    const onContentLoad = () => {
        setContentLoaded(true);
    };
    if (!formData) {
        return null;
    }
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, className: b('wrapper') },
        React.createElement("div", { className: b('container', { hidden: !contentLoaded, border }) },
            React.createElement(InnerForm, { className: b('form'), formData: formData, onContentLoad: onContentLoad }))));
};