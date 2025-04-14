"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const paddings_1 = require("../../models/paddings");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const Document_1 = require("../../icons/Document");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('documents');
const Documents = (props) => {
    const { paddingTop, paddingBottom, qa, withSticky, items } = props;
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content', { withSticky }), qa: qa, "data-testid": qa },
        react_1.default.createElement("ul", { className: b('list') }, items.map((item, index) => (react_1.default.createElement("li", { key: String(index) },
            react_1.default.createElement("a", { className: b('item'), href: item.link, target: "_blank", rel: "noreferrer" },
                react_1.default.createElement(Document_1.Document, null),
                react_1.default.createElement("span", { className: b('item-name') }, item.name))))))));
};
exports.Documents = Documents;