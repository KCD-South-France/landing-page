import { describe, expect, it, vi } from 'vitest';
import { createAstrowindConfigMock } from '~/test/mocks/astrowind-config';
import { createAstroContentRuntimeMock } from '~/test/mocks/astro-content';

vi.mock('astrowind:config', () =>
    createAstrowindConfigMock({
        APP_BLOG: {
            isEnabled: false,
            isRelatedPostsEnabled: false,
            post: { isEnabled: false },
            list: { isEnabled: false },
            category: { isEnabled: false },
            tag: { isEnabled: false },
        },
    })
);

vi.mock('astro:content', () => createAstroContentRuntimeMock({ posts: [] }));

import { getStaticPathsBlogCategory, getStaticPathsBlogList, getStaticPathsBlogPost, getStaticPathsBlogTag } from './blog';

describe('blog utilities when blog is disabled', () => {
    it('returns empty static paths for all blog routes', async () => {
        const paginate = () => [];

        await expect(getStaticPathsBlogList({ paginate: paginate as never })).resolves.toEqual([]);
        await expect(getStaticPathsBlogPost()).resolves.toEqual([]);
        await expect(getStaticPathsBlogCategory({ paginate: paginate as never })).resolves.toEqual([]);
        await expect(getStaticPathsBlogTag({ paginate: paginate as never })).resolves.toEqual([]);
    });
});
