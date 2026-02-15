import { describe, expect, it, vi } from 'vitest';
import { createAstroContentSchemaMock, createAstroLoadersMock } from '~/test/mocks/astro-content';

vi.mock('astro:content', () => createAstroContentSchemaMock());

vi.mock('astro/loaders', () => createAstroLoadersMock());

import { collections } from './config';

describe('content collections config', () => {
    it('defines the post collection', () => {
        expect(collections).toHaveProperty('post');
        expect(collections.post).toBeTruthy();
    });
});
