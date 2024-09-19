import React from 'react';
import { GetPostsType, PostData, Service, Tag } from '../models/common';
export interface FeedContextProps {
    posts?: PostData[];
    pinnedPost?: PostData;
    totalCount?: number;
    tags?: Tag[];
    services?: Service[];
    getPosts?: GetPostsType;
    pageCountForShowSupportButtons?: number;
}
export declare const FeedContext: React.Context<FeedContextProps>;
