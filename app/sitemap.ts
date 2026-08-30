import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://linconclass.com.br';
  const routes = ['', '/experiencias', '/eventos', '/formacoes', '/sobre', '/contato', '/saxofonista-para-casamento-rj', '/sax-live-com-dj-rj'];
  return routes.map((route, index) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: index === 0 ? 'weekly' : 'monthly', priority: index === 0 ? 1 : 0.8 }));
}
