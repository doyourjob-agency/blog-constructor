import React from 'react';
export declare function useHover<T extends HTMLElement = HTMLElement>(): [
    ref: React.RefObject<T>,
    hovering: boolean
];
