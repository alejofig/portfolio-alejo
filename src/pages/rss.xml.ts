import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIContext } from 'astro';

import { AppConfig } from '@/utils/AppConfig';

export const GET = async (context: APIContext) =>
  rss({
    // `<title>` field in output xml
    title: AppConfig.title,
    // `<description>` field in output xml
    description: AppConfig.description,
    // base URL for RSS <item> links
    site: context.site!,
    // one <item> per blog post
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
