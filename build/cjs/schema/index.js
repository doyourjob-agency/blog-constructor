"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemasForCustom = exports.validators = void 0;
const tslib_1 = require("tslib");
const common_1 = require("../models/common");
const blocks = tslib_1.__importStar(require("./blocks"));
const headers = tslib_1.__importStar(require("./headers"));
const { Author, Banner, ColoredText, CTA, Feed, Layout, Media, Meta, Suggest, YFM } = blocks;
const { Header } = headers;
exports.validators = {
    blocks,
    headers,
};
exports.schemasForCustom = {
    headers: {
        [common_1.BlockType.Header]: Header,
    },
    blocks: {
        [common_1.BlockType.Author]: Author,
        [common_1.BlockType.Banner]: Banner,
        [common_1.BlockType.ColoredText]: ColoredText,
        [common_1.BlockType.CTA]: CTA,
        [common_1.BlockType.Feed]: Feed,
        [common_1.BlockType.Layout]: Layout,
        [common_1.BlockType.Media]: Media,
        [common_1.BlockType.Meta]: Meta,
        [common_1.BlockType.Suggest]: Suggest,
        [common_1.BlockType.YFM]: YFM,
    },
};