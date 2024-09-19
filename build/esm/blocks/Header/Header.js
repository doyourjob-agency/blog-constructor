import React, { useContext } from 'react';
import { HeaderBlock } from '@gravity-ui/page-constructor';
import { PostInfo } from '../../components/PostInfo/PostInfo';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { BlogMetrikaGoalIds } from '../../constants';
import { LocaleContext } from '../../contexts/LocaleContext';
import { PostPageContext } from '../../contexts/PostPageContext';
import { PaddingsDirections } from '../../models/paddings';
import { getBreadcrumbs, getBlogPath as getDefaultBlogPath } from '../../utils/common';
import { SettingsContext } from '../../contexts/SettingsContext';
/**
 * @deprecated Metrika will be deleted after launch of analyticsEvents
 */
const metrikaGoals = {
    sharing: BlogMetrikaGoalIds.shareTop,
    save: BlogMetrikaGoalIds.saveTop,
};
const breadcrumbsGoals = [
    {
        name: BlogMetrikaGoalIds.breadcrumbsTop,
        isCrossSite: true,
    },
];
export const Header = (props) => {
    const { theme, paddingTop, paddingBottom } = props;
    const { post } = useContext(PostPageContext);
    const { locale } = useContext(LocaleContext);
    const { getBlogPath = getDefaultBlogPath } = useContext(SettingsContext);
    const blogPath = getBlogPath(locale.pathPrefix || '');
    const { description, title, id, date, readingTime, tags } = post;
    const breadcrumbs = getBreadcrumbs({ tags, blogPath });
    if (theme === 'dark' && breadcrumbs) {
        breadcrumbs.theme = 'dark';
    }
    breadcrumbs.metrikaGoals = breadcrumbsGoals;
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        } },
        React.createElement(HeaderBlock, Object.assign({}, props, { title: title, description: description, breadcrumbs: breadcrumbs }),
            React.createElement(PostInfo, { postId: id, date: date, readingTime: readingTime, metrikaGoals: metrikaGoals, theme: theme, qa: "blog-header-meta-container" }))));
};