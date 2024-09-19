"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = require("../blocks/Author/Author");
const Banner_1 = require("../blocks/Banner/Banner");
const CTA_1 = require("../blocks/CTA/CTA");
const ColoredText_1 = require("../blocks/ColoredText/ColoredText");
const Feed_1 = require("../blocks/Feed/Feed");
const Form_1 = require("../blocks/Form/Form");
const Header_1 = require("../blocks/Header/Header");
const Layout_1 = require("../blocks/Layout/Layout");
const Media_1 = require("../blocks/Media/Media");
const Meta_1 = require("../blocks/Meta/Meta");
const Suggest_1 = require("../blocks/Suggest/Suggest");
const YFM_1 = require("../blocks/YFM/YFM");
const common_1 = require("../models/common");
const blocks = {
    [common_1.BlockType.YFM]: YFM_1.YFM,
    [common_1.BlockType.Layout]: Layout_1.Layout,
    [common_1.BlockType.Media]: Media_1.Media,
    [common_1.BlockType.Banner]: Banner_1.Banner,
    [common_1.BlockType.CTA]: CTA_1.CTA,
    [common_1.BlockType.ColoredText]: ColoredText_1.ColoredText,
    [common_1.BlockType.Author]: Author_1.Author,
    [common_1.BlockType.Suggest]: Suggest_1.Suggest,
    [common_1.BlockType.Meta]: Meta_1.Meta,
    [common_1.BlockType.Feed]: Feed_1.Feed,
    [common_1.BlockType.Form]: Form_1.Form,
};
const headers = {
    [common_1.BlockType.Header]: Header_1.Header,
};
exports.default = { blocks, headers };