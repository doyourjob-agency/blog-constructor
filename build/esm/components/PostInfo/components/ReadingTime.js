import React from 'react';
import { Icon } from '@gravity-ui/uikit';
import { Keyset, i18 } from '../../../i18n';
import { Time } from '../../../icons/Time';
import { block } from '../../../utils/cn';
import '../PostInfo.css';
const b = block('post-info');
const ICON_SIZE = 16;
export const ReadingTime = ({ readingTime, size = 's', id, qa }) => (React.createElement("div", { className: b('item', { size }), id: id, "data-qa": qa },
    React.createElement("span", { className: b('icon') },
        React.createElement(Icon, { data: Time, size: ICON_SIZE, className: b('icon-color') })),
    i18(Keyset.ContextReadingTime, { count: readingTime })));