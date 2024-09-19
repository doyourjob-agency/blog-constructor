import React from 'react';
import { Keyset, i18 } from '../../i18n';
import { block } from '../../utils/cn';
import './PostsEmpty.css';
const b = block('posts-empty');
export const PostsEmpty = () => (React.createElement("div", { className: b('container') },
    React.createElement("div", { className: b('title') }, i18(Keyset.TitleEmptyContainer)),
    React.createElement("div", { className: b('subtitle') }, i18(Keyset.ContextEmptyContainer))));