import React, { useContext } from 'react';
import { SliderBlock } from '@gravity-ui/page-constructor';
import { PostCard } from '../../components/PostCard/PostCard';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { BlogMetrikaGoalIds } from '../../constants';
import { PostPageContext } from '../../contexts/PostPageContext';
import { Keyset, i18 } from '../../i18n';
import { PaddingsDirections } from '../../models/paddings';
/**
 * @deprecated Metrika will be deleted after launch of analyticsEvents
 */
const metrikaGoals = [
    {
        name: BlogMetrikaGoalIds.suggest,
        isCrossSite: true,
    },
];
/**
 * Suggested posts block
 *
 * @param posts - suggested posts list
 * @param paddingTop - padding top code
 * @param paddingBottom - padding bottom code
 *
 * @returns -jsx
 */
export const Suggest = ({ paddingTop = 'l', paddingBottom = 'l' }) => {
    const { suggestedPosts } = useContext(PostPageContext);
    if (suggestedPosts.length === 0) {
        return null;
    }
    return (React.createElement(Wrapper, { paddings: {
            [PaddingsDirections.top]: paddingTop,
            [PaddingsDirections.bottom]: paddingBottom,
        } },
        React.createElement(SliderBlock, { slidesToShow: { xl: 3, lg: 2, sm: 1 }, title: { text: i18(Keyset.TitleSuggest) }, lazyLoad: false }, suggestedPosts.map((post) => (React.createElement(PostCard, { key: post.id, metrikaGoals: metrikaGoals, post: post }))))));
};