import React, { useContext } from 'react';
import { LocaleContext } from '../../../contexts/LocaleContext';
import { PostCardSize } from '../../../models/common';
import { block } from '../../../utils/cn';
import { format } from '../../../utils/date';
import '../PostInfo.css';
const b = block('post-info');
export const Date = ({ date, size = PostCardSize.SMALL, id, qa }) => {
    const { locale } = useContext(LocaleContext);
    return (React.createElement("div", { className: b('item', { size }), id: id, "data-qa": qa }, format(date, 'longDate', locale === null || locale === void 0 ? void 0 : locale.code)));
};