import React from 'react';
import { Button } from '@gravity-ui/uikit';
import { Keyset, i18 } from '../../i18n';
import { block } from '../../utils/cn';
import './PostError.css';
const b = block('posts-error');
export const PostsError = ({ onButtonClick }) => {
    const handleClick = () => (onButtonClick ? onButtonClick() : window.location.reload());
    return (React.createElement("div", { className: b('container') },
        React.createElement("div", { className: b('title') }, i18(Keyset.ErrorTitle)),
        React.createElement("div", { className: b('subtitle') }, i18(Keyset.PostLoadError)),
        React.createElement("div", { className: b('button') },
            React.createElement(Button, { size: "xl", view: "outlined", onClick: handleClick }, i18(Keyset.ActionTryAgain)))));
};