import React from 'react';
import { PaddingsDirections } from '../../models/paddings';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Document } from '../../icons/Document';
import { block } from '../../utils/cn';
import './Documents.css';
const b = block('documents');
export const Documents = (props) => {
    const { paddingTop, paddingBottom, qa, withSticky, items } = props;
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content', { withSticky }), qa: qa },
        React.createElement("ul", { className: b('list') }, items.map((item, index) => (React.createElement("li", { key: String(index) },
            React.createElement("a", { className: b('item'), href: item.link, target: "_blank", rel: "noreferrer" },
                React.createElement(Document, null),
                React.createElement("span", { className: b('item-name') }, item.name))))))));
};