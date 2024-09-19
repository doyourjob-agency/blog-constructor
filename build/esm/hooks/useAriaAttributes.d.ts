type Labels = string | number | boolean | undefined;
type Description = string | number | boolean | undefined;
interface UseAriaAttributesProps {
    labelIds?: Labels[];
    descriptionIds: Description[];
}
/**
 * Returns aria-attributes
 * @param labelIds - labels ids. Falsy values will be ignored
 * @param descriptionIds - descriptions ids. Falsy values will be ignored
 * @returns aria attributes for the element to be labelled
 */
export declare const useAriaAttributes: ({ labelIds, descriptionIds }: UseAriaAttributesProps) => {
    'aria-labelledby': string;
    'aria-describedby': string;
};
export {};
