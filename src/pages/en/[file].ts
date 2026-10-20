import type { APIRoute } from 'astro';

import { profileMarkdown } from '@/utils/agentText';

// A literal en/index.md.ts would be emitted as /en.md, so the filename comes from a param.
export const getStaticPaths = () => [{ params: { file: 'index.md' } }];

export const GET: APIRoute = () =>
  new Response(profileMarkdown('en'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
