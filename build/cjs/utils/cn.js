"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.block = exports.cn = exports.NAMESPACE = void 0;
const classname_1 = require("@bem-react/classname");
exports.NAMESPACE = 'bc-';
exports.cn = (0, classname_1.withNaming)({ e: '__', m: '_' });
exports.block = (0, classname_1.withNaming)({ n: exports.NAMESPACE, e: '__', m: '_' });