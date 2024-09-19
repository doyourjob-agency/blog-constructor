"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('layout');
const Layout = ({ fullWidth, mobileOrder, children, paddingTop = 'xs', paddingBottom = 'xs', }) => {
    const layout = (0, react_1.useMemo)(() => {
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
    const renderChildren = (blockChildren) => react_1.default.Children.map(blockChildren, (child, i) => (react_1.default.createElement("div", { key: i, className: b('item') }, child)));
    const { left, right } = (0, react_1.useMemo)(() => children === null || children === void 0 ? void 0 : children.reduce((sortedChildren, child) => {
        var _a, _b;
        if (((_b = (_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.column) === 'left') {
            sortedChildren.left.push(child);
        }
        else {
            sortedChildren.right.push(child);
        }
        return sortedChildren;
    }, { left: [], right: [] }), [children]);
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        } },
        react_1.default.createElement(page_constructor_1.Row, { className: b('row'), noGutter: true },
            react_1.default.createElement(page_constructor_1.Col, Object.assign({ className: b('left-col') }, layout.leftCol), left && renderChildren(left)),
            react_1.default.createElement(page_constructor_1.Col, Object.assign({ className: b('right-col') }, layout.rightCol), right && renderChildren(right)))));
};
exports.Layout = Layout;