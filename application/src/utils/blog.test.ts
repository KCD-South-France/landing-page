import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createAstrowindConfigMock } from '~/test/mocks/astrowind-config';
import { createAstroContentRuntimeMock } from '~/test/mocks/astro-content';

function getSamplePosts() {
  return [
    {
      id: 'post-1',
      data: {
        title: 'Post 1',
        excerpt: 'Excerpt 1',
        category: 'kubernetes',
        tags: ['cncf', 'k8s'],
        publishDate: new Date('2025-01-10T00:00:00.000Z'),
        metadata: {},
        draft: false,
      },
    },
    {
      id: 'post-2',
      data: {
        title: 'Post 2',
        excerpt: 'Excerpt 2',
        category: 'observability',
        tags: ['otel'],
        publishDate: new Date('2025-01-11T00:00:00.000Z'),
        metadata: {},
        draft: false,
      },
    },
  ] as const;
}

vi.mock('astrowind:config', () =>
  createAstrowindConfigMock({
    APP_BLOG: {
      isEnabled: true,
      isRelatedPostsEnabled: true,
      post: { permalink: '/blog/%slug%', isEnabled: true, robots: { index: true } },
      list: { pathname: 'blog', isEnabled: true, robots: { index: true } },
      category: { pathname: 'category', isEnabled: true, robots: { index: true } },
      tag: { pathname: 'tag', isEnabled: true, robots: { index: false } },
    },
  })
);

vi.mock('astro:content', () => createAstroContentRuntimeMock({ posts: [...getSamplePosts()], readingTime: 2 }));

import {
  fetchPosts,
  findLatestPosts,
  findPostsByIds,
  findPostsBySlugs,
  getRelatedPosts,
  getStaticPathsBlogCategory,
  getStaticPathsBlogList,
  getStaticPathsBlogPost,
  getStaticPathsBlogTag,
} from './blog';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('blog utilities', () => {
  it('fetches and normalizes posts', async () => {
    const posts = await fetchPosts();
    expect(posts).toHaveLength(2);
    expect(posts[0].title).toBeDefined();
    expect(posts[0].permalink).toContain('blog');
  });

  it('finds posts by id and slug', async () => {
    const byIds = await findPostsByIds(['post-1']);
    const bySlugs = await findPostsBySlugs(['post-1']);

    expect(byIds).toHaveLength(1);
    expect(bySlugs).toHaveLength(1);
  });

  it('returns empty arrays for invalid id/slug inputs', async () => {
    await expect(findPostsByIds(undefined as never)).resolves.toEqual([]);
    await expect(findPostsBySlugs(undefined as never)).resolves.toEqual([]);
  });

  it('returns latest posts by count', async () => {
    const latest = await findLatestPosts({ count: 1 });
    expect(latest).toHaveLength(1);
  });

  it('uses default latest count when count is not provided', async () => {
    const latest = await findLatestPosts({});
    expect(latest).toHaveLength(2);
  });

  it('builds static paths for list/post/category/tag', async () => {
    const paginate = (items: unknown[], config: unknown) => [{ items, config }];

    const list = await getStaticPathsBlogList({ paginate: paginate as never });
    const post = await getStaticPathsBlogPost();
    const category = await getStaticPathsBlogCategory({ paginate: paginate as never });
    const tag = await getStaticPathsBlogTag({ paginate: paginate as never });

    expect(list.length).toBeGreaterThan(0);
    expect(post.length).toBe(2);
    expect(category.length).toBeGreaterThan(0);
    expect(tag.length).toBeGreaterThan(0);
  });

  it('returns related posts ordered by relevance score', async () => {
    const posts = await fetchPosts();
    const related = await getRelatedPosts(posts[0], 1);
    expect(related).toHaveLength(1);
    expect(related[0].id).not.toBe(posts[0].id);
  });
});
