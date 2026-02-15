import { vi } from 'vitest';

export const createImagesOptimizationMock = (options?: {
    unpicResult?: Array<{ src: string; width: number; height?: number }>;
    astroResult?: Array<{ src: string; width: number; height?: number }>;
}) => ({
    isUnpicCompatible: vi.fn(() => true),
    unpicOptimizer: vi.fn(async () => options?.unpicResult ?? [{ src: '/optimized.jpg', width: 1200, height: 626 }]),
    astroAssetsOptimizer: vi.fn(async () => options?.astroResult ?? [{ src: '/astro-optimized.jpg', width: 1200, height: 626 }]),
});

export const createAstroAssetsMock = () => ({
    getImage: vi.fn(async ({ src, width }: { src: string; width: number }) => ({
        src: `/optimized/${width}/${src}`,
        attributes: { width, height: Math.round(width / 2) },
    })),
});
