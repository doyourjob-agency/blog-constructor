"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExtendedComponentMap = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const page_constructor_1 = require("@gravity-ui/page-constructor");
const blocksMap_1 = tslib_1.__importDefault(require("../constructor/blocksMap"));
const useExtendedComponentMap = (custom) => (0, react_1.useMemo)(() => (Object.assign(Object.assign({}, custom), { blocks: Object.assign(Object.assign({}, blocksMap_1.default.blocks), (0, page_constructor_1.getCustomItems)(['blocks'], custom)), headers: Object.assign(Object.assign({}, blocksMap_1.default.headers), (0, page_constructor_1.getCustomItems)(['headers'], custom)) })), [custom]);
exports.useExtendedComponentMap = useExtendedComponentMap;