export interface ObjectSchema extends Record<string, unknown> {
    properties: object;
}
export declare const filteredItem: (itemsSchema: ObjectSchema) => {
    type: string;
    properties: {
        when: {
            type: string;
        };
    };
};
export declare const BlogBlockBase: {
    paddingTop: {
        type: string;
        enum: string[];
    };
    paddingBottom: {
        type: string;
        enum: string[];
    };
    fullWidth: {
        type: string;
    };
    column: {
        type: string;
        enum: string[];
    };
    qa: {
        type: string;
    };
};
