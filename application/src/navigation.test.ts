import { describe, expect, it, vi } from 'vitest';
import { createAstrowindConfigMock } from '~/test/mocks/astrowind-config';

vi.mock('astrowind:config', () => createAstrowindConfigMock());

vi.mock('~/assets/favicons/favicon.svg', () => ({
  default: { src: '/favicon.svg' },
}));

import { getFooterData, getHeaderData } from './navigation';

describe('navigation', () => {
  it('returns localized header links', () => {
    const header = getHeaderData('fr');
    expect(header.links).toHaveLength(3);
    expect(header.links[0].href).toBe('/fr/sponsoring');
    expect(header.links[1].href).toBe('/fr/a-propos');
    expect(header.links[2].href).toBe('/fr/contact');
  });

  it('returns localized footer data and favicon note', () => {
    const footer = getFooterData('en');

    expect(footer.links).toHaveLength(2);
    expect(footer.secondaryLinks.map((item) => item.href)).toEqual(['/en/terms-of-service', '/en/privacy-policy']);
    expect(footer.footNote).toContain('/favicon.svg');
    expect(footer.footNote).toContain('Cloud Native Provence');
  });
});
