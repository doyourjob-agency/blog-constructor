/// <reference types="lodash" />
import { AnalyticsEvent, AnalyticsEventsProp, ContentBlockProps, HeaderBreadCrumbsProps } from '@gravity-ui/page-constructor';
import { RouterContextProps } from '../contexts/RouterContext';
import { GetPostsRequest, Query, Tag } from '../models/common';
import { AnalyticsCounter } from '../counters/utils';
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
export declare const postLikeStatus: import("lodash").DebouncedFunc<(postId: number | string, hasUserLike: boolean) => void>;
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
    controlPosition?: "default" | "bottom" | undefined;
};
type GetBreadcrumbsProps = {
    tags?: Tag[];
    blogPath: string;
};
export declare const getBlogPath: (pathPrefix: string) => string;
export declare const getBreadcrumbs: ({ tags, blogPath }: GetBreadcrumbsProps) => HeaderBreadCrumbsProps;
export declare const getMergedAnalyticsEvents: (analyticEvents: AnalyticsEventsProp, existringEvents?: AnalyticsEventsProp) => {
    name: string;
    type?: string | undefined;
    counters?: import("@gravity-ui/page-constructor").AnalyticsCounters | undefined;
    context?: string | undefined;
    target?: string | undefined;
}[];
export declare const getFeedQueryParams: (queryString: Query, pageNumber?: number) => GetPostsRequest;
export declare const scrollOnPageChange: (containerId: string) => void;
export declare const getQaAttributes: (qa?: string, ...customKeys: (string | Array<string>)[]) => Record<string, string>;
type PrepareAnalyticsEventArgs = {
    name: string;
    counter?: AnalyticsCounter;
    options?: Record<string, string | number>;
};
export declare const prepareAnalyticsEvent: ({ name, counter, options, }: PrepareAnalyticsEventArgs) => AnalyticsEvent;
export {};
