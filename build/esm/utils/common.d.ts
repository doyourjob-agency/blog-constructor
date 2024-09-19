/// <reference types="lodash" />
import { ContentBlockProps, HeaderBreadCrumbsProps, MetrikaGoal, NewMetrikaGoal } from '@gravity-ui/page-constructor';
import { RouterContextProps } from '../contexts/RouterContext';
import { GetPostsRequest, Query, Tag } from '../models/common';
export interface QueryParam {
    name: string;
    value?: string | number | null;
}
export interface RouterActionOptions {
    shallow?: boolean;
}
export declare function getAbsolutePath(router: RouterContextProps, url?: string): string;
export declare const getPageSearchParams: (query?: Query) => URLSearchParams;
export declare const scrollToHash: (hash: string, browser?: string) => void;
type CloudListTagStub = {};
export declare const getTags: ((tags: Tag[], blogPath: string) => CloudListTagStub[]) & import("lodash").MemoizedFunction;
export declare const postLikeStatus: import("lodash").DebouncedFunc<(postId: number, hasUserLike: boolean) => void>;
export declare const updateContentSizes: ({ size, colSizes, theme, ...contentData }: ContentBlockProps) => {
    size: import("@gravity-ui/page-constructor").ContentSize;
    colSizes: {
        all: number;
        md: number;
    } | Partial<Record<import("@gravity-ui/page-constructor").GridColumnSize, number>>;
    theme: import("@gravity-ui/page-constructor").ContentTheme;
    title?: string | import("@gravity-ui/page-constructor").TitleItemBaseProps | undefined;
    titleId?: string | undefined;
    text?: string | undefined;
    textId?: string | undefined;
    additionalInfo?: string | undefined;
    links?: import("@gravity-ui/page-constructor").LinkProps[] | undefined;
    buttons?: import("@gravity-ui/page-constructor").ButtonProps[] | undefined;
    centered?: boolean | undefined;
    list?: import("@gravity-ui/page-constructor").ContentItemProps[] | undefined;
};
type GetBreadcrumbsProps = {
    tags?: Tag[];
    blogPath: string;
};
export declare const getBlogPath: (pathPrefix: string) => string;
export declare const getBreadcrumbs: ({ tags, blogPath }: GetBreadcrumbsProps) => HeaderBreadCrumbsProps;
export declare const isMetrikaExist: (goal: NewMetrikaGoal, existGoals: NewMetrikaGoal[]) => boolean;
export declare const getBlogElementMetrika: (blogCustomGoal: NewMetrikaGoal, existingGoals?: MetrikaGoal) => string | string[] | NewMetrikaGoal[];
export declare const getFeedQueryParams: (queryString: Query, pageNumber?: number) => GetPostsRequest;
export declare const scrollOnPageChange: (containerId: string) => void;
export declare const getQaAttributes: (qa?: string, ...customKeys: (string | Array<string>)[]) => Record<string, string>;
export {};
