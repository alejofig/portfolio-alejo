import type { APIRoute } from 'astro';

import { profileMarkdown } from '@/utils/agentText';

export const GET: APIRoute = () =>
  new Response(profileMarkdown('es'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
