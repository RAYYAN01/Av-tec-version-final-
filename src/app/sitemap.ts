import type { MetadataRoute } from 'next';
import { SERVICE_LIST } from '@/data/services';
import { CASE_STUDIES } from '@/data/case-studies';

const SITE_URL = 'https://avtecevents.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/work`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/rental`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_LIST.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const workRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/work/${c.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
