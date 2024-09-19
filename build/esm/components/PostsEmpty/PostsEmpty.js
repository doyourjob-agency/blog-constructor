import React from 'react';
import { Keyset, i18n } from '../../i18n';
import { block } from '../../utils/cn';
import './PostsEmpty.css';
const b = block('posts-empty');
export const PostsEmpty = () => (React.createElement("div", { className: b('container') },
    React.createElement("div", { className: b('title') }, i18n(Keyset.TitleEmptyContainer)),
    React.createElement("div", { className: b('subtitle') }, i18n(Keyset.ContextEmptyContainer))));