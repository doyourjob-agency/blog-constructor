"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaWrapper = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_helmet_1 = require("react-helmet");
/**
 * Wrapper on meta data of page
 *
 * @param needHelmetWrapper - component needs helmet wrapper
 * @param metaComponent - meta data component
 *
 * @returns jsx
 */
const MetaWrapper = ({ needHelmetWrapper = false, metaComponent }) => needHelmetWrapper ? react_1.default.createElement(react_helmet_1.Helmet, null, metaComponent) : metaComponent;
exports.MetaWrapper = MetaWrapper;