import * as blocks from './blocks';
import * as headers from './headers';
export declare const validators: {
    blocks: typeof blocks;
    headers: typeof headers;
};
export declare const schemasForCustom: {
    headers: {
        "blog-header-block": {
            "blog-header-block": {
                type: string;
                additionalProperties: boolean;
                properties: {
                    title: {
                        type: string;
                        contentType: string;
                    };
                    overtitle: {
                        type: string;
                        contentType: string;
                    };
                    description: {
                        type: string;
                        contentType: string;
                        inputType: string;
                    };
                    width: {
                        type: string;
                        enum: string[];
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
                    offset: {
                        type: string;
                        enum: string[];
                    };
                    image: {
                        oneOf: (({
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
                        } & {
                            optionName: string;
                        }) | {
                            type: string;
                            additionalProperties: boolean;
                            required: import("@gravity-ui/page-constructor").Theme[];
                            properties: {};
                            optionName: string;
                        })[];
                    };
                    video: {
                        oneOf: (({
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                src: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                loop: {
                                    oneOf: ({
                                        optionName: string;
                                        type: string;
                                        additionalProperties: boolean;
                                        required: string[];
                                        properties: {
                                            start: {
                                                type: string;
                                            };
                                            end: {
                                                type: string;
                                            };
                                        };
                                    } | {
                                        type: string;
                                        optionName: string;
                                    })[];
                                };
                                type: {
                                    type: string;
                                    enum: string[];
                                };
                                muted: {
                                    type: string;
                                };
                                autoplay: {
                                    type: string;
                                };
                                elapsedTime: {
                                    type: string;
                                };
                                playButton: {
                                    type: string;
                                    additionalProperties: boolean;
                                    properties: {
                                        type: {
                                            type: string;
                                            enum: string[];
                                        };
                                        theme: {
                                            type: string;
                                            enum: string[];
                                        };
                                        text: {
                                            type: string;
                                            contentType: string;
                                        };
                                    };
                                };
                                controls: {
                                    type: string;
                                    enum: import("@gravity-ui/page-constructor").MediaVideoControlsType[];
                                };
                                customControlsOptions: {
                                    type: string;
                                    additionalProperties: boolean;
                                    properties: {
                                        type: {
                                            type: string;
                                            enum: import("@gravity-ui/page-constructor").CustomControlsType[];
                                        };
                                        muteButtonShown: {
                                            type: string;
                                        };
                                        positioning: {
                                            type: string;
                                            enum: import("@gravity-ui/page-constructor").CustomControlsButtonPositioning[];
                                        };
                                    };
                                };
                                ariaLabel: {
                                    type: string;
                                };
                            };
                        } & {
                            optionName: string;
                        }) | {
                            type: string;
                            additionalProperties: boolean;
                            required: import("@gravity-ui/page-constructor").Theme[];
                            properties: {};
                            optionName: string;
                        })[];
                    };
                    mediaView: {
                        type: string;
                        enum: string[];
                    };
                    backLink: {
                        type: string;
                        required: string[];
                        properties: {
                            url: {
                                type: string;
                            };
                            title: {
                                type: string;
                                contentType: string;
                            };
                        };
                    };
                    imageSize: {
                        type: string;
                        enum: string[];
                    };
                    verticalOffset: {
                        type: string;
                        enum: string[];
                    };
                    background: {
                        oneOf: (({
                            type: string;
                            additionalProperties: boolean;
                            required: never[];
                            properties: {
                                fullWidth: {
                                    type: string;
                                };
                                fullWidthMedia: {
                                    type: string;
                                };
                                color: {
                                    type: string;
                                };
                                image: {
                                    oneOf: ({
                                        optionName: string;
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
                                        type?: undefined;
                                        items?: undefined;
                                    } | {
                                        type: string;
                                        items: {
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
                                        optionName: string;
                                    })[];
                                };
                                disableImageSliderForArrayInput: {
                                    type: string;
                                };
                                video: {
                                    type: string;
                                    additionalProperties: boolean;
                                    required: string[];
                                    properties: {
                                        src: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        loop: {
                                            oneOf: ({
                                                optionName: string;
                                                type: string;
                                                additionalProperties: boolean;
                                                required: string[];
                                                properties: {
                                                    start: {
                                                        type: string;
                                                    };
                                                    end: {
                                                        type: string;
                                                    };
                                                };
                                            } | {
                                                type: string;
                                                optionName: string;
                                            })[];
                                        };
                                        type: {
                                            type: string;
                                            enum: string[];
                                        };
                                        muted: {
                                            type: string;
                                        };
                                        autoplay: {
                                            type: string;
                                        };
                                        elapsedTime: {
                                            type: string;
                                        };
                                        playButton: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                type: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                theme: {
                                                    type: string;
                                                    enum: string[];
                                                };
                                                text: {
                                                    type: string;
                                                    contentType: string;
                                                };
                                            };
                                        };
                                        controls: {
                                            type: string;
                                            enum: import("@gravity-ui/page-constructor").MediaVideoControlsType[];
                                        };
                                        customControlsOptions: {
                                            type: string;
                                            additionalProperties: boolean;
                                            properties: {
                                                type: {
                                                    type: string;
                                                    enum: import("@gravity-ui/page-constructor").CustomControlsType[];
                                                };
                                                muteButtonShown: {
                                                    type: string;
                                                };
                                                positioning: {
                                                    type: string;
                                                    enum: import("@gravity-ui/page-constructor").CustomControlsButtonPositioning[];
                                                };
                                            };
                                        };
                                        ariaLabel: {
                                            type: string;
                                        };
                                    };
                                };
                                youtube: {
                                    type: string;
                                };
                                parallax: {
                                    type: string;
                                };
                                height: {
                                    type: string;
                                };
                                previewImg: {
                                    type: string;
                                };
                                dataLens: {
                                    oneOf: ({
                                        type: string;
                                        optionName: string;
                                    } | {
                                        optionName: string;
                                        type: string;
                                        additionalProperties: boolean;
                                        required: string[];
                                        properties: {
                                            id: {
                                                type: string;
                                            };
                                            theme: {
                                                type: string;
                                                enum: string[];
                                            };
                                        };
                                    })[];
                                };
                                fullscreen: {
                                    type: string;
                                };
                                analyticsEvents: {
                                    anyOf: ({
                                        type: string;
                                        additionalProperties: {
                                            type: string;
                                        };
                                        required: string[];
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            type: {
                                                type: string;
                                            };
                                            counters: {
                                                type: string;
                                                additionalProperties: boolean;
                                                required: never[];
                                                properties: {
                                                    include: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                        };
                                                    };
                                                    exclude: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                            context: {
                                                type: string;
                                            };
                                        };
                                    } | {
                                        type: string;
                                        items: {
                                            type: string;
                                            additionalProperties: {
                                                type: string;
                                            };
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                };
                                                type: {
                                                    type: string;
                                                };
                                                counters: {
                                                    type: string;
                                                    additionalProperties: boolean;
                                                    required: never[];
                                                    properties: {
                                                        include: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        exclude: {
                                                            type: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                    };
                                                };
                                                context: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    })[];
                                };
                                ratio: {
                                    type: string;
                                };
                                iframe: {
                                    type: string;
                                    additionalProperties: boolean;
                                    required: string[];
                                    properties: {
                                        src: {
                                            type: string;
                                        };
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        height: {
                                            type: string;
                                        };
                                        width: {
                                            type: string;
                                        };
                                    };
                                };
                                margins: {
                                    type: string;
                                };
                            };
                        } & {
                            optionName: string;
                        }) | {
                            type: string;
                            additionalProperties: boolean;
                            required: import("@gravity-ui/page-constructor").Theme[];
                            properties: {};
                            optionName: string;
                        })[];
                    };
                    theme: {
                        type: string;
                        enum: string[];
                    };
                    breadcrumbs: {
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
                                        url: {
                                            type: string;
                                        };
                                        text: {
                                            type: string;
                                            contentType: string;
                                        };
                                    };
                                };
                            };
                            theme: {
                                type: string;
                                enum: string[];
                            };
                        };
                    };
                    status: {
                        type: string;
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
    };
    blocks: {
        "blog-author-block": {
            "blog-author-block": {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    authorId: {
                        type: string;
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
        "blog-banner-block": {
            "blog-banner-block": {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    color: {
                        type: string;
                    };
                    image: {
                        type: string;
                    };
                    imageSize: {
                        type: string;
                        enum: string[];
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
        "blog-colored-text-block": {
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
        "blog-cta-block": {
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
        "blog-feed-block": {
            "blog-feed-block": {
                additionalProperties: boolean;
                required: never[];
                properties: {
                    title: {
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
                    };
                    image: {
                        type: string;
                    };
                    description: {
                        type: string;
                        contentType: string;
                    };
                    size: {
                        type: string;
                        enum: string[];
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
        "blog-layout-block": {
            "blog-layout-block": {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    children: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    mobileOrder: {
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
        "blog-media-block": {
            "blog-media-block": {
                type: string;
                additionalProperties: boolean;
                properties: {
                    text: {
                        type: string;
                        contentType: string;
                    };
                    color: {
                        type: string;
                    };
                    image: {
                        oneOf: ({
                            optionName: string;
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
                            type?: undefined;
                            items?: undefined;
                        } | {
                            type: string;
                            items: {
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
                            optionName: string;
                        })[];
                    };
                    disableImageSliderForArrayInput: {
                        type: string;
                    };
                    video: {
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            src: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            loop: {
                                oneOf: ({
                                    optionName: string;
                                    type: string;
                                    additionalProperties: boolean;
                                    required: string[];
                                    properties: {
                                        start: {
                                            type: string;
                                        };
                                        end: {
                                            type: string;
                                        };
                                    };
                                } | {
                                    type: string;
                                    optionName: string;
                                })[];
                            };
                            type: {
                                type: string;
                                enum: string[];
                            };
                            muted: {
                                type: string;
                            };
                            autoplay: {
                                type: string;
                            };
                            elapsedTime: {
                                type: string;
                            };
                            playButton: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    theme: {
                                        type: string;
                                        enum: string[];
                                    };
                                    text: {
                                        type: string;
                                        contentType: string;
                                    };
                                };
                            };
                            controls: {
                                type: string;
                                enum: import("@gravity-ui/page-constructor").MediaVideoControlsType[];
                            };
                            customControlsOptions: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    type: {
                                        type: string;
                                        enum: import("@gravity-ui/page-constructor").CustomControlsType[];
                                    };
                                    muteButtonShown: {
                                        type: string;
                                    };
                                    positioning: {
                                        type: string;
                                        enum: import("@gravity-ui/page-constructor").CustomControlsButtonPositioning[];
                                    };
                                };
                            };
                            ariaLabel: {
                                type: string;
                            };
                        };
                    };
                    youtube: {
                        type: string;
                    };
                    parallax: {
                        type: string;
                    };
                    height: {
                        type: string;
                    };
                    previewImg: {
                        type: string;
                    };
                    dataLens: {
                        oneOf: ({
                            type: string;
                            optionName: string;
                        } | {
                            optionName: string;
                            type: string;
                            additionalProperties: boolean;
                            required: string[];
                            properties: {
                                id: {
                                    type: string;
                                };
                                theme: {
                                    type: string;
                                    enum: string[];
                                };
                            };
                        })[];
                    };
                    fullscreen: {
                        type: string;
                    };
                    analyticsEvents: {
                        anyOf: ({
                            type: string;
                            additionalProperties: {
                                type: string;
                            };
                            required: string[];
                            properties: {
                                name: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                counters: {
                                    type: string;
                                    additionalProperties: boolean;
                                    required: never[];
                                    properties: {
                                        include: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        exclude: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                                context: {
                                    type: string;
                                };
                            };
                        } | {
                            type: string;
                            items: {
                                type: string;
                                additionalProperties: {
                                    type: string;
                                };
                                required: string[];
                                properties: {
                                    name: {
                                        type: string;
                                    };
                                    type: {
                                        type: string;
                                    };
                                    counters: {
                                        type: string;
                                        additionalProperties: boolean;
                                        required: never[];
                                        properties: {
                                            include: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            exclude: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                    context: {
                                        type: string;
                                    };
                                };
                            };
                        })[];
                    };
                    ratio: {
                        type: string;
                    };
                    iframe: {
                        type: string;
                        additionalProperties: boolean;
                        required: string[];
                        properties: {
                            src: {
                                type: string;
                            };
                            name: {
                                type: string;
                            };
                            title: {
                                type: string;
                            };
                            height: {
                                type: string;
                            };
                            width: {
                                type: string;
                            };
                        };
                    };
                    margins: {
                        type: string;
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
        "blog-meta-block": {
            "blog-meta-block": {
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
        "blog-suggest-block": {
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
        "blog-yfm-block": {
            "blog-yfm-block": {
                type: string;
                additionalProperties: boolean;
                required: string[];
                properties: {
                    text: {
                        type: string;
                        contentType: string;
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
    };
};
