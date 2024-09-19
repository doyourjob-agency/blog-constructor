const MAX_VISIBLE_PAGES = 5;
export const getPageConfigs = ({ page, queryParams, pagesCount, handlePageClick, }) => {
    const paginatorItems = [];
    // it is calculating the middle of visible pages below
    const pageOffset = (MAX_VISIBLE_PAGES - 1) / 2;
    let startPage = page - pageOffset;
    let endPage = page + pageOffset;
    if (startPage < 1) {
        endPage = page + pageOffset - startPage + 1;
        startPage = 1;
    }
    endPage = Math.min(endPage, pagesCount);
    for (let i = startPage; i <= endPage; i++) {
        paginatorItems.push({
            key: String(i),
            dataKey: String(i),
            index: i,
            mods: { type: 'page', active: page === i },
            queryParams,
            onClick: handlePageClick,
            content: i,
        });
    }
    return paginatorItems;
};
export const getPagesCount = (props) => {
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
    return Math.min(totalPages, props.maxPages);
};