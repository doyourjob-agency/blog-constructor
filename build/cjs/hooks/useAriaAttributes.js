"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAriaAttributes = void 0;
const react_1 = require("react");
/**
 * Returns aria-attributes
 * @param labelIds - labels ids. Falsy values will be ignored
 * @param descriptionIds - descriptions ids. Falsy values will be ignored
 * @returns aria attributes for the element to be labelled
 */
const useAriaAttributes = ({ labelIds = [], descriptionIds = [] }) => {
    const labelledBy = (0, react_1.useMemo)(() => labelIds.filter(Boolean).join(' '), [labelIds]);
    const describedBy = (0, react_1.useMemo)(() => descriptionIds.filter(Boolean).join(' '), [descriptionIds]);
    return {
        'aria-labelledby': labelledBy,
        'aria-describedby': describedBy,
    };
};
exports.useAriaAttributes = useAriaAttributes;