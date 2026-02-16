import { describe, expect, it } from 'vitest';

import { defaultLang } from './config';
import { getLangFromUrl, sourceLocales, useTranslations } from './utils';

describe('i18n utils', () => {
  it('detects language from URL pathname', () => {
    expect(getLangFromUrl(new URL('https://example.test/fr/a-propos'))).toBe('fr');
    expect(getLangFromUrl(new URL('https://example.test/en/about'))).toBe('en');
  });

  it('falls back to default language for unknown language segment', () => {
    expect(getLangFromUrl(new URL('https://example.test/es/algo'))).toBe(defaultLang);
    expect(getLangFromUrl(new URL('https://example.test/'))).toBe(defaultLang);
  });

  it('returns translations for selected language', () => {
    const tFr = useTranslations('fr');
    const tEn = useTranslations('en');

    expect(tFr.nav.about).toBe(sourceLocales.fr.nav.about);
    expect(tEn.nav.about).toBe(sourceLocales.en.nav.about);
  });

  it('falls back to default language key when selected language value is empty', () => {
    const originalValue = sourceLocales.en.nav.about;

    (sourceLocales.en as unknown as { nav: { about: string } }).nav.about = '';
    const t = useTranslations('en');

    expect(t.nav.about).toBe(sourceLocales.fr.nav.about);

    (sourceLocales.en as unknown as { nav: { about: string } }).nav.about = originalValue;
  });
});
