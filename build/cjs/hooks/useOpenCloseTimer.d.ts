/**
 * Timer to automatically update `open` state after a given duration
 * @param {number} openTimestamp - UNIX timestamp in milliseconds
 * @param {number} openDuration - in milliseconds
 * @returns {{open: boolean}} {open} - whether the state is open
 */
export declare function useOpenCloseTimer(openTimestamp?: number, openDuration?: number): {
    open: boolean;
};
