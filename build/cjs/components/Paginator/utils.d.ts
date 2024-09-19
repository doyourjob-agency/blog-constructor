import { GetPageConfigParams, PaginatorItemProps, PaginatorProps } from './types';
export declare const getPageConfigs: ({ page, queryParams, pagesCount, handlePageClick, }: GetPageConfigParams) => PaginatorItemProps[];
export declare const getPagesCount: (props: Pick<PaginatorProps, 'totalItems' | 'itemsPerPage' | 'maxPages'>) => number;
