import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';
import { defaultLang } from '~/i18n/ui';

export const GET = async () => {
  const posts = APP_BLOG.isEnabled ? (await fetchPosts()).filter((post) => post.locale === defaultLang) : [];

  const rss = await getRssString({
    title: `Blog - ${SITE.name}’`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post', defaultLang),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
