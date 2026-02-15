import { describe, expect, it, vi } from 'vitest';
import { createAstrowindConfigMock } from '~/test/mocks/astrowind-config';

const { fetchPostsMock } = vi.hoisted(() => ({
    fetchPostsMock: vi.fn(async () => [
        {
            permalink: '/blog/post-1',
            title: 'Post 1',
            excerpt: 'Excerpt',
            publishDate: new Date('2026-01-01T00:00:00.000Z'),
        },
    ]),
}));

vi.mock('astrowind:config', () =>
    createAstrowindConfigMock({
        APP_BLOG: {
            isEnabled: false,
        },
    })
);

vi.mock('@astrojs/rss', () => ({
    getRssString: vi.fn(async () => '<rss>ok</rss>'),
}));

vi.mock('~/utils/blog', () => ({
    fetchPosts: fetchPostsMock,
}));

vi.mock('~/utils/permalinks', () => ({
    getPermalink: vi.fn((value: string) => value),
}));

import { GET } from '../../pages/rss.xml';

describe('rss endpoint when blog is disabled', () => {
    it('does not fetch posts and still returns RSS response', async () => {
        const response = await GET();

        expect(response.headers.get('Content-Type')).toBe('application/xml');
        expect(fetchPostsMock).not.toHaveBeenCalled();
    });
});
