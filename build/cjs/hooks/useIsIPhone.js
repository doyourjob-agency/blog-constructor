"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsIPhone = void 0;
const react_1 = require("react");
const DeviceContext_1 = require("../contexts/DeviceContext");
const useIsIPhone = () => {
    const { device } = (0, react_1.useContext)(DeviceContext_1.DeviceContext);
    return (device === null || device === void 0 ? void 0 : device.model) === 'iPhone';
};
exports.useIsIPhone = useIsIPhone;