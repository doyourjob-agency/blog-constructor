import React from 'react';
import './PostError.css';
type PostsErrorContainerProps = {
    onButtonClick?: () => void | Promise<void>;
};
export declare const PostsError: ({ onButtonClick }: PostsErrorContainerProps) => React.JSX.Element;
export {};
