export declare const CTA: {
    "blog-cta-block": {
        type: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
            items: {
                type: string;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    required: string[];
                    properties: {
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
                        subtitle: {
                            type: string;
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
                        subtitleLinks: {
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
                    };
                };
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
            visibility: {
                oneOf: ({
                    type: string;
                    enum: string[];
                    additionalProperties?: undefined;
                    properties?: undefined;
                } | {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        xs: {
                            type: string;
                        };
                        sm: {
                            type: string;
                        };
                        md: {
                            type: string;
                        };
                        lg: {
                            type: string;
                        };
                        xl: {
                            type: string;
                        };
                        xxl: {
                            type: string;
                        };
                    };
                    enum?: undefined;
                })[];
            };
            visible: {
                type: string;
                enum: string[];
            };
            hidden: {
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
            backgroundFull: {
                type: string;
            };
            type: {};
            when: {
                type: string;
            };
        };
    };
};
