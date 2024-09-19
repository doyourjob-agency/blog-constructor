export declare const Suggest: {
    "blog-suggest-block": {
        type: string;
        additionalProperties: boolean;
        properties: {
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
            anchor: {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    text: {
                        type: string;
                        contentType: string;
                    };
                    url: {
                        type: string;
                    };
                    urlTitle: {
                        type: string;
                    };
                };
            };
            visible: {
                type: string;
                enum: string[];
            };
            resetPaddings: {
                type: string;
            };
            context: {
                type: string;
            };
            indent: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    top: {
                        enum: string[];
                    };
                    bottom: {
                        enum: string[];
                    };
                };
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
