"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/*
 * Source code copied from https://github.com/uidotdev/usehooks | MIT License
 * @see https://usehooks.com/usehover
 */
function useHover() {
    const [hovering, setHovering] = react_1.default.useState(false);
    const ref = react_1.default.useRef(null);
    react_1.default.useEffect(() => {
        const node = ref.current;
        if (!node)
            return;
        const handleMouseEnter = () => {
            setHovering(true);
        };
        const handleMouseLeave = () => {
            setHovering(false);
        };
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
        // eslint-disable-next-line consistent-return
        return () => {
            node.removeEventListener('mouseenter', handleMouseEnter);
            node.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    return [ref, hovering];
}
exports.useHover = useHover;