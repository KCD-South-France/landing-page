import { describe, expect, it, vi } from 'vitest';
import { createAstrowindConfigMock } from '~/test/mocks/astrowind-config';

const { getRssStringMock } = vi.hoisted(() => ({
  getRssStringMock: vi.fn(async () => '<rss>ok</rss>'),
}));

vi.mock('astrowind:config', () =>
  createAstrowindConfigMock({
    METADATA: {
      description: '',
    },
    APP_BLOG: {
      isEnabled: true,
    },
  })
);

vi.mock('@astrojs/rss', () => ({
  getRssString: getRssStringMock,
}));

vi.mock('~/utils/blog', () => ({
  fetchPosts: vi.fn(async () => [
    {
      permalink: '/blog/post-1',
      title: 'Post 1',
      excerpt: 'Excerpt',
      publishDate: new Date('2026-01-01T00:00:00.000Z'),
    },
  ]),
}));

vi.mock('~/utils/permalinks', () => ({
  getPermalink: vi.fn((value: string) => value),
}));

import { GET } from '../../pages/rss.xml';

describe('rss endpoint', () => {
  it('returns RSS response', async () => {
    const response = await GET();
    expect(response.headers.get('Content-Type')).toBe('application/xml');
    await expect(response.text()).resolves.toContain('<rss>ok</rss>');

    expect(getRssStringMock).toHaveBeenCalledWith(
      expect.objectContaining({
        description: '',
      })
    );
  });
});
