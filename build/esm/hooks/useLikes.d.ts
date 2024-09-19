import { ToggleLikeCallbackType } from '../models/common';
type UseLikesProps = {
    hasLike?: boolean;
    count?: number;
    postId?: number;
    toggleLikeCallback?: ToggleLikeCallbackType;
};
type UseLikeData = {
    likesCount: number;
    hasUserLike: boolean;
    handleLike: () => void;
};
type UseLikesType = (props: UseLikesProps) => UseLikeData;
export declare const useLikes: UseLikesType;
export {};
