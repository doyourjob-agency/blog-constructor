import React, { useMemo } from 'react';
import { Col, Row, } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import './Layout.css';
const b = block('layout');
export const Layout = ({ fullWidth, mobileOrder, children, paddingTop = 'xs', paddingBottom = 'xs', }) => {
    const layout = useMemo(() => {
        const layoutConfig = {
            leftCol: {
                sizes: { all: 12, lg: 8 },
                orders: { all: 1, lg: 1 },
            },
            rightCol: {
                sizes: { all: 12, lg: 3 },
                offsets: {
                    all: 0,
                    lg: 1,
                },
                orders: { all: 2, lg: 2 },
            },
        };
        if (fullWidth) {
            layoutConfig.leftCol.sizes = { all: 12 };
            layoutConfig.rightCol.sizes = { all: 12 };
            layoutConfig.rightCol.offsets = { all: 0 };
        }
        if (mobileOrder === 'reverse') {
            layoutConfig.leftCol.orders = { all: 3, lg: 1 };
        }
        return layoutConfig;
    }, [fullWidth, mobileOrder]);
    const renderChildren = (blockChildren) => React.Children.map(blockChildren, (child, i) => (React.createElement("div", { key: i, className: b('item') }, child)));
    const { left, right } = useMemo(() => children === null || children === void 0 ? void 0 : children.reduce((sortedChildren, child) => {
        var _a, _b;
        if (((_b = (_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.column) === 'left') {
            sortedChildren.left.push(child);
        }
        else {
            sortedChildren.right.push(child);
        }
        return sortedChildren;
    }, { left: [], right: [] }), [children]);
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        } },
        React.createElement(Row, { className: b('row'), noGutter: true },
            React.createElement(Col, Object.assign({ className: b('left-col') }, layout.leftCol), left && renderChildren(left)),
            React.createElement(Col, Object.assign({ className: b('right-col') }, layout.rightCol), right && renderChildren(right)))));
};