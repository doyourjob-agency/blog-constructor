import React from 'react';

import {
    ContentSize,
    ContentTheme,
} from '@doyourjob/gravity-ui-page-constructor/build/esm/models/constructor-items/common';
import {render, screen} from '@testing-library/react';
import pick from 'lodash/pick';

import {PADDING_SIZES} from '../../../../test-utils/constants';
import {testPaddingBottom, testPaddingTop} from '../../../../test-utils/shared/common';
import {
    testContentWithAdditionalInfo,
    testContentWithButtons,
    testContentWithCentered,
    testContentWithLinks,
    testContentWithList,
    testContentWithSize,
    testContentWithText,
    testContentWithTheme,
    testContentWithTitle,
} from '../../../../test-utils/shared/content';
import {BannerProps} from '../../../models/blocks';
import {PaddingSize} from '../../../models/paddings';
import {getQaAttributes} from '../../../utils/common';
import {Banner} from '../Banner';

type BannerPropsType = Omit<BannerProps, 'title' | 'qa'> & {
    title: string;
} & Required<Pick<BannerProps, 'qa'>>;

const bannerData: BannerPropsType = {
    color: '#ff0000',
    title: 'Banner Title',
    text: 'Banner text',
    image: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/storybook/images/img_6-12_light.png',
    additionalInfo: 'additional info',
    links: [{url: 'https://example.com', theme: 'normal'}],
    buttons: [{url: 'https://example.com', text: 'button'}],
    centered: true,
    list: [
        {
            icon: 'https://storage.yandexcloud.net/cloud-www-assets/constructor/storybook/images/img-gray.png',
            title: 'list title',
            text: 'list text',
        },
    ],
    qa: 'banner',
};

const imageSizes: Array<BannerProps['imageSize']> = ['m', 's'];

const qaAttributes = getQaAttributes(bannerData.qa, ['image-container']);
const contentQaAttributes = getQaAttributes(qaAttributes.content, ['link', 'list']);

describe('Banner', () => {
    test('Render by default', () => {
        render(<Banner {...pick(bannerData, 'title')} />);
        const banner = screen.getByText(bannerData.title);
        expect(banner).toBeInTheDocument();
        expect(banner).toBeVisible();
    });

    test('Render image', () => {
        render(<Banner {...pick(bannerData, 'title', 'image')} />);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', bannerData.image);
    });

    test.each(new Array<BannerProps['imageSize']>(...imageSizes))(
        'Render with given "%s" image size',
        (imageSize) => {
            render(<Banner {...pick(bannerData, 'title', 'image', 'qa')} imageSize={imageSize} />);
            const imageContainer = screen.getByTestId(qaAttributes.imageContainer);
            expect(imageContainer).toHaveClass(
                `bc-banner__image-container_image-size_${imageSize}`,
            );
        },
    );

    test('Render background color', () => {
        render(<Banner {...pick(bannerData, 'title', 'color', 'qa')} />);
        const bannerContent = screen.getByTestId(qaAttributes.content);
        expect(bannerContent).toHaveStyle({backgroundColor: bannerData.color});
    });

    test.each(new Array<PaddingSize>(...PADDING_SIZES))(
        'render with given "%s" paddingTop size',
        (size: PaddingSize) => {
            testPaddingTop<BannerPropsType>({
                component: Banner,
                props: {...pick(bannerData, 'title', 'qa'), paddingTop: size},
                options: {qaId: qaAttributes.wrapper},
            });
        },
    );

    test.each(new Array<PaddingSize>(...PADDING_SIZES))(
        'render with given "%s" paddingBottom size',
        (size: PaddingSize) => {
            testPaddingBottom<BannerProps>({
                component: Banner,
                props: {...pick(bannerData, 'title', 'qa'), paddingBottom: size},
                options: {qaId: qaAttributes.wrapper},
            });
        },
    );

    test('Render with title', () => {
        testContentWithTitle<BannerProps>({
            component: Banner,
            props: pick(bannerData, 'title'),
        });
    });

    test('Render with text', () => {
        testContentWithText<BannerProps>({
            component: Banner,
            props: pick(bannerData, 'text'),
        });
    });

    test('Render with additionalInfo', () => {
        testContentWithAdditionalInfo<BannerProps>({
            component: Banner,
            props: pick(bannerData, 'additionalInfo'),
        });
    });

    test.each(new Array<ContentSize>('s', 'l'))('Render with given "%s" size', (size) => {
        testContentWithSize<BannerProps>({
            component: Banner,
            props: {qa: bannerData.qa, size},
            options: {qaId: contentQaAttributes.container},
        });
    });

    test('Render with links', () => {
        const linkQa = getQaAttributes(contentQaAttributes.link, ['normal']);
        testContentWithLinks<BannerProps>({
            component: Banner,
            props: pick(bannerData, 'links', 'qa'),
            options: {qaId: linkQa.normal},
        });
    });

    test('Render with buttons', () => {
        testContentWithButtons<BannerProps>({
            component: Banner,
            props: bannerData,
            options: {qaId: contentQaAttributes.button},
        });
    });

    test('Render with centered', () => {
        testContentWithCentered<BannerProps>({
            component: Banner,
            props: bannerData,
            options: {qaId: contentQaAttributes.container},
        });
    });

    test.each(new Array<ContentTheme>('default', 'dark', 'light'))(
        'Render with given "%s" theme',
        (theme) => {
            testContentWithTheme<BannerProps>({
                component: Banner,
                props: {qa: bannerData.qa, theme},
                options: {qaId: contentQaAttributes.container},
            });
        },
    );

    test('Render with list', () => {
        testContentWithList<BannerProps>({
            component: Banner,
            props: pick(bannerData, 'list', 'qa'),
            options: {qaId: contentQaAttributes.list},
        });
    });
});
