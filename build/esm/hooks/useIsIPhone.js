import { useContext } from 'react';
import { DeviceContext } from '../contexts/DeviceContext';
export const useIsIPhone = () => {
    const { device } = useContext(DeviceContext);
    return (device === null || device === void 0 ? void 0 : device.model) === 'iPhone';
};