import { describe, expect, it, vi } from 'vitest';
import { createAstrowindConfigMock } from '~/test/mocks/astrowind-config';

vi.mock('astrowind:config', () => createAstrowindConfigMock());

import {
    applyGetPermalinks,
    cleanSlug,
    getAsset,
    getBlogPermalink,
    getCanonical,
    getHomePermalink,
    getPermalink,
    trimSlash,
} from './permalinks';

describe('permalinks utilities', () => {
    it('trims slash values', () => {
        expect(trimSlash('/abc/')).toBe('abc');
        expect(trimSlash('///a/b///')).toBe('a/b');
    });

    it('builds clean slugs', () => {
        expect(cleanSlug('À propos/Mon Test')).toBe('a-propos/mon-test');
    });

    it('builds canonical URLs', () => {
        expect(getCanonical('/fr/about')).toBe('https://cloudnative-provence.fr/fr/about');
    });

    it('returns external links unchanged', () => {
        expect(getPermalink('https://example.com')).toBe('https://example.com');
        expect(getPermalink('#anchor')).toBe('#anchor');
    });

    it('creates expected permalinks by type', () => {
        expect(getHomePermalink()).toBe('/');
        expect(getBlogPermalink()).toBe('/blog');
        expect(getAsset('logos/logo.svg')).toBe('/logos/logo.svg');
        expect(getPermalink('kubernetes', 'tag')).toBe('/tag/kubernetes');
        expect(getPermalink('security', 'category')).toBe('/category/security');
        expect(getPermalink('/fr/a-propos', 'page')).toBe('/fr/a-propos');
    });

    it('applies permalink transformation recursively', () => {
        const menu = {
            items: [
                { href: '/fr/contact' },
                { href: { type: 'home' } },
                { href: { type: 'asset', url: 'logos/logo.svg' } },
            ],
        };

        const result = applyGetPermalinks(menu) as {
            items: Array<{ href: string }>;
        };

        expect(result.items[0].href).toBe('/fr/contact');
        expect(result.items[1].href).toBe('/');
        expect(result.items[2].href).toBe('/logos/logo.svg');
    });
});
