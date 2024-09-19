export declare const ColoredText: {
    "blog-colored-text-block": {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
            background: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    image: {
                        oneOf: ({
                            type: string;
                            properties: {
                                when: {
                                    type: string;
                                };
                            };
                        } | {
                            type: string;
                            pattern: string;
                            optionName: string;
                            items?: undefined;
                        } | {
                            type: string;
                            items: {
                                type: string;
                                properties: {
                                    when: {
                                        type: string;
                                    };
                                };
                            };
                            optionName: string;
                            pattern?: undefined;
                        })[];
                    };
                    color: {
                        type: string;
                    };
                    altText: {
                        type: string;
                        contentType: string;
                    };
                };
            };
            title: {
                oneOf: ({
                    type: string;
                    contentType: string;
                    optionName: string;
                } | {
                    optionName: string;
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
                        text: {
                            type: string;
                            contentType: string;
                        };
                        textSize: {
                            type: string;
                            enum: string[];
                        };
                        url: {
                            type: string;
                        };
                        urlTitle: {
                            type: string;
                        };
                        resetMargin: {
                            type: string;
                        };
                    };
                    contentType?: undefined;
                })[];
            };
            text: {
                type: string;
                contentType: string;
                inputType: string;
            };
            additionalInfo: {
                type: string;
                contentType: string;
            };
            size: {
                type: string;
                enum: string[];
            };
            links: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            buttons: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            theme: {
                type: string;
                enum: string[];
            };
            list: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        when: {
                            type: string;
                        };
                    };
                };
            };
            controlPosition: {
                type: string;
                enum: string[];
            };
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
