import { describe, expect, it } from 'vitest';

import en from './locales/en';
import fr from './locales/fr';

describe('i18n locale dictionaries', () => {
    it('provides required navigation and metadata keys', () => {
        expect(en['nav.about']).toBeTruthy();
        expect(fr['nav.about']).toBeTruthy();
        expect(en['meta.title.default']).toBeTruthy();
        expect(fr['meta.title.default']).toBeTruthy();
    });

    it('contains consistent key count between locales', () => {
        expect(Object.keys(en).length).toBe(Object.keys(fr).length);
    });
});
