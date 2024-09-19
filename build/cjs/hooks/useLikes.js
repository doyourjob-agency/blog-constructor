"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLikes = void 0;
const react_1 = require("react");
const useLikes = ({ hasLike, count, toggleLikeCallback, postId }) => {
    const [hasUserLike, setHasUserLike] = (0, react_1.useState)(hasLike !== null && hasLike !== void 0 ? hasLike : false);
    const [likesCount, setLikesCount] = (0, react_1.useState)(count !== null && count !== void 0 ? count : 0);
    const handleLike = (0, react_1.useCallback)(() => {
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
    (0, react_1.useEffect)(() => {
        setHasUserLike(hasLike !== null && hasLike !== void 0 ? hasLike : false);
        setLikesCount(count !== null && count !== void 0 ? count : 0);
    }, [hasLike, count]);
    return {
        likesCount,
        hasUserLike,
        handleLike,
    };
};
exports.useLikes = useLikes;