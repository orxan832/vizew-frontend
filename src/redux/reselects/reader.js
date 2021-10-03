import { createSelector } from 'reselect';

const commentSituation = state => state.common.commentSituation;
const tags = state => state.common.tags;
const userId = state => state.user.user.id;

export const commentSituationSelector = createSelector(
    commentSituation, tags, userId,
    (commentSituation, tags, userId) => ({ commentSituation, tags, userId })
)

export const tagsSelector = createSelector(
    tags, tags => tags
)