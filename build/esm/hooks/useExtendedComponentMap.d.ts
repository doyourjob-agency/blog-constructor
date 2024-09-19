import { CustomConfig } from '@gravity-ui/page-constructor';
export declare const useExtendedComponentMap: (custom: CustomConfig | undefined) => {
    blocks: {
        "blog-yfm-block": (props: import("../models/blocks").YFMProps) => import("react").JSX.Element;
        "blog-layout-block": ({ fullWidth, mobileOrder, children, paddingTop, paddingBottom, }: import("react").PropsWithChildren<import("../models/blocks").LayoutProps>) => import("react").JSX.Element;
        "blog-media-block": ({ text, paddingTop, paddingBottom, ...mediaProps }: import("../models/blocks").MediaProps) => import("react").JSX.Element;
        "blog-banner-block": ({ color, imageSize, image, paddingTop, paddingBottom, qa, ...content }: import("../models/blocks").BannerProps) => import("react").JSX.Element;
        "blog-cta-block": ({ items, paddingTop, paddingBottom, qa }: import("../models/blocks").CTAProps) => import("react").JSX.Element;
        "blog-colored-text-block": ({ background, paddingTop, paddingBottom, qa, ...content }: import("../models/blocks").ColoredTextProps) => import("react").JSX.Element;
        "blog-author-block": (props: import("../models/blocks").AuthorProps) => import("react").JSX.Element | null;
        "blog-suggest-block": ({ paddingTop, paddingBottom }: import("../models/blocks").SuggestProps) => import("react").JSX.Element | null;
        "blog-meta-block": (props: import("../models/blocks").MetaProps) => import("react").JSX.Element;
        "blog-feed-block": ({ image }: import("../models/blocks").FeedProps) => import("react").JSX.Element;
        "blog-form-block": ({ paddingTop, paddingBottom, ...props }: import("../models/blocks").FormProps) => import("react").JSX.Element | null;
    };
    headers: {
        "blog-header-block": (props: import("../models/blocks").HeaderProps) => import("react").JSX.Element;
    };
    subBlocks?: import("@gravity-ui/page-constructor").CustomItems | undefined;
    navigation?: import("@gravity-ui/page-constructor").CustomItems | undefined;
    loadable?: import("@gravity-ui/page-constructor").LoadableConfig | undefined;
    decorators?: {
        block?: ((props: import("@gravity-ui/page-constructor").BlockDecorationProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>)[] | undefined;
    } | undefined;
};
