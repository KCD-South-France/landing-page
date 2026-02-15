import { afterEach, describe, expect, it, vi } from 'vitest';

import { getProjectRootDir, getRelativeUrlByFilePath } from './directories';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('directories utils', () => {
  it('computes project root directory', () => {
    const root = getProjectRootDir();
    expect(root.endsWith('/application/')).toBe(true);
  });

  it('converts absolute source path to relative url', () => {
    const relative = getRelativeUrlByFilePath('/tmp/src/pages/index.astro');
    expect(typeof relative).toBe('string');
  });

  it('computes production project root directory branch', async () => {
    vi.stubEnv('MODE', 'production');
    vi.resetModules();

    const mod = await import('./directories');
    const root = mod.getProjectRootDir();

    expect(root.endsWith('/application/src/')).toBe(true);
  });
});
