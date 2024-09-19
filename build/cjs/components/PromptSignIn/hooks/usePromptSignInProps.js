"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePromptSignInProps = void 0;
const react_1 = require("react");
function usePromptSignInProps(onClickSignIn) {
    const [openTimestamp, setTime] = (0, react_1.useState)(0);
    const requireSignIn = (0, react_1.useMemo)(() => {
        return onClickSignIn
            ? () => {
                setTime(Date.now());
            }
            : undefined;
    }, [onClickSignIn, setTime]);
    return { onClickSignIn, openTimestamp, requireSignIn };
}
exports.usePromptSignInProps = usePromptSignInProps;