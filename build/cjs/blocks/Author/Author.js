"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const Wrapper_1 = require("../../components/Wrapper/Wrapper");
const PostPageContext_1 = require("../../contexts/PostPageContext");
const paddings_1 = require("../../models/paddings");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('author');
const Author = (props) => {
    var _a;
    const { image, paddingTop, paddingBottom, authorId, qa } = props;
    const { post } = (0, react_1.useContext)(PostPageContext_1.PostPageContext);
    const author = (_a = post === null || post === void 0 ? void 0 : post.authors) === null || _a === void 0 ? void 0 : _a.find(({ id }) => id === authorId);
    const authorItem = (0, react_1.useMemo)(() => {
        var _a;
        const imageUrl = (_a = author === null || author === void 0 ? void 0 : author.avatar) !== null && _a !== void 0 ? _a : image;
        const authorAvatar = react_1.default.createElement("img", { src: imageUrl, alt: "author" });
        return {
            firstName: (author === null || author === void 0 ? void 0 : author.firstName) || '',
            secondName: (author === null || author === void 0 ? void 0 : author.secondName) || '',
            description: (author === null || author === void 0 ? void 0 : author.shortDescription) || '',
            avatar: authorAvatar,
        };
    }, [author === null || author === void 0 ? void 0 : author.avatar, author === null || author === void 0 ? void 0 : author.firstName, author === null || author === void 0 ? void 0 : author.shortDescription, author === null || author === void 0 ? void 0 : author.secondName, image]);
    if (!(authorItem === null || authorItem === void 0 ? void 0 : authorItem.firstName) || !(authorItem === null || authorItem === void 0 ? void 0 : authorItem.secondName)) {
        return null;
    }
    return (react_1.default.createElement(Wrapper_1.Wrapper, { paddings: {
            [paddings_1.PaddingsDirections.top]: paddingTop,
            [paddings_1.PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content'), qa: qa },
        react_1.default.createElement("div", { className: b('layout'), "data-qa": "blog-author-layout" },
            react_1.default.createElement(page_constructor_1.Author, { type: page_constructor_1.AuthorType.Column, author: authorItem, authorContainerClassName: b('container') }))));
};
exports.Author = Author;