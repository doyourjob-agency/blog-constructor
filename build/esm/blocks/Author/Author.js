import React, { useContext, useMemo } from 'react';
import { AuthorType, Author as PCAuthor } from '@gravity-ui/page-constructor';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { PostPageContext } from '../../contexts/PostPageContext';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import './Author.css';
const b = block('author');
export const Author = (props) => {
    var _a;
    const { image, paddingTop, paddingBottom, authorId, qa } = props;
    const { post } = useContext(PostPageContext);
    const author = (_a = post === null || post === void 0 ? void 0 : post.authors) === null || _a === void 0 ? void 0 : _a.find(({ id }) => id === authorId);
    const authorItem = useMemo(() => {
        var _a;
        const imageUrl = (_a = author === null || author === void 0 ? void 0 : author.avatar) !== null && _a !== void 0 ? _a : image;
        const authorAvatar = React.createElement("img", { src: imageUrl, alt: "author" });
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
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, className: b('content'), qa: qa },
        React.createElement("div", { className: b('layout'), "data-qa": "blog-author-layout" },
            React.createElement(PCAuthor, { type: AuthorType.Column, author: authorItem, authorContainerClassName: b('container') }))));
};