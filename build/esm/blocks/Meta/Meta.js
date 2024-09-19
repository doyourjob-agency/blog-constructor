import React, { useContext } from 'react';
import { HeaderBreadcrumbs, YFMWrapper } from '@gravity-ui/page-constructor';
import { PostInfo } from '../../components/PostInfo/PostInfo';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { BlogMetrikaGoalIds } from '../../constants';
import { LocaleContext } from '../../contexts/LocaleContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import { PostPageContext } from '../../contexts/PostPageContext';
import { PaddingsDirections } from '../../models/paddings';
import { block } from '../../utils/cn';
import { getBreadcrumbs, getBlogPath as getDefaultBlogPath, getQaAttributes, } from '../../utils/common';
import './Meta.css';
const b = block('meta');
/**
 * @deprecated Metrika will be deleted after launch of analyticsEvents
 */
const metrikaGoals = {
    sharing: BlogMetrikaGoalIds.shareBottom,
    save: BlogMetrikaGoalIds.saveBottom,
};
const breadcrumbsGoals = [
    {
        name: BlogMetrikaGoalIds.breadcrumbsBottom,
        isCrossSite: true,
    },
];
export const Meta = (props) => {
    const { paddingTop = 'l', paddingBottom = 'l', theme = 'light', qa } = props;
    const { post } = useContext(PostPageContext);
    const { locale } = useContext(LocaleContext);
    const qaAttributes = getQaAttributes(qa, 'post-info');
    const { getBlogPath = getDefaultBlogPath } = useContext(SettingsContext);
    const blogPath = getBlogPath(locale.pathPrefix || '');
    const { title, id, date, readingTime, tags } = post;
    const breadcrumbs = getBreadcrumbs({ tags, blogPath });
    breadcrumbs.metrikaGoals = breadcrumbsGoals;
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        }, qa: qaAttributes.wrapper },
        breadcrumbs && (React.createElement(HeaderBreadcrumbs, { items: breadcrumbs.items, className: b('breadcrumbs'), theme: theme, metrikaGoals: breadcrumbs.metrikaGoals })),
        title && (React.createElement(YFMWrapper, { content: title, modifiers: {
                blogBreadcrumbs: true,
                resetPaddings: true,
            } })),
        post && (React.createElement(PostInfo, { postId: id, date: date, readingTime: readingTime, metrikaGoals: metrikaGoals, qa: qaAttributes.postInfo }))));
};