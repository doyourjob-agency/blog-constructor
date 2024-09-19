import { useMemo } from 'react';
/**
 * Returns aria-attributes
 * @param labelIds - labels ids. Falsy values will be ignored
 * @param descriptionIds - descriptions ids. Falsy values will be ignored
 * @returns aria attributes for the element to be labelled
 */
export const useAriaAttributes = ({ labelIds = [], descriptionIds = [] }) => {
    const labelledBy = useMemo(() => labelIds.filter(Boolean).join(' '), [labelIds]);
    const describedBy = useMemo(() => descriptionIds.filter(Boolean).join(' '), [descriptionIds]);
    return {
        'aria-labelledby': labelledBy,
        'aria-describedby': describedBy,
    };
};