import { useCallback, useEffect, useState } from 'react';
export const useLikes = ({ hasLike, count, toggleLikeCallback, postId }) => {
    const [hasUserLike, setHasUserLike] = useState(hasLike !== null && hasLike !== void 0 ? hasLike : false);
    const [likesCount, setLikesCount] = useState(count !== null && count !== void 0 ? count : 0);
    const handleLike = useCallback(() => {
        let newLikesCount = likesCount;
        if (hasUserLike && likesCount > 0) {
            newLikesCount--;
        }
        if (!hasUserLike) {
            newLikesCount++;
        }
        setHasUserLike(!hasUserLike);
        setLikesCount(newLikesCount);
        if (toggleLikeCallback) {
            toggleLikeCallback({
                postId,
                hasLike: !hasUserLike,
            });
        }
    }, [hasUserLike, likesCount, postId, toggleLikeCallback]);
    useEffect(() => {
        setHasUserLike(hasLike !== null && hasLike !== void 0 ? hasLike : false);
        setLikesCount(count !== null && count !== void 0 ? count : 0);
    }, [hasLike, count]);
    return {
        likesCount,
        hasUserLike,
        handleLike,
    };
};