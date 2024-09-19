import React from 'react';
import { DEFAULT_PADDINGS } from '../../constants';
import { block } from '../../utils/cn';
import './Wrapper.css';
const b = block('wrapper');
export const Wrapper = ({ children, paddings = DEFAULT_PADDINGS, className, qa, }) => (React.createElement("section", { className: b({
        ['padding-top']: (paddings === null || paddings === void 0 ? void 0 : paddings.top) || 'xs',
        ['padding-bottom']: (paddings === null || paddings === void 0 ? void 0 : paddings.bottom) || 'l',
        ['padding-left']: (paddings === null || paddings === void 0 ? void 0 : paddings.left) || '',
        ['padding-right']: (paddings === null || paddings === void 0 ? void 0 : paddings.right) || '',
    }, className), "data-qa": qa }, children));