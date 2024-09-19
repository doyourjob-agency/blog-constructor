export declare const Media: {
    "blog-media-block": {
        type: string;
        additionalProperties: boolean;
        properties: {
            formData: {
                oneOf: ({
                    type: string;
                    optionName: string;
                    properties: {
                        yandex: {
                            type: string;
                            required: string[];
                            properties: {
                                id: {
                                    type: string;
                                };
                                containerId: {
                                    type: string;
                                };
                                type: {};
                                when: {
                                    type: string;
                                };
                            };
                        };
                        hubspot?: undefined;
                    };
                } | {
                    type: string;
                    optionName: string;
                    properties: {
                        hubspot: {
                            type: string;
                            required: string[];
                            properties: {
                                region: {
                                    type: string;
                                };
                                portalId: {
                                    type: string;
                                };
                                formId: {
                                    type: string;
                                };
                                formInstanceId: {
                                    type: string;
                                };
                                type: {};
                                when: {
                                    type: string;
                                };
                            };
                        };
                        yandex?: undefined;
                    };
                })[];
            };
            border: {
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
