// Adapted from Beautiful UI — https://www.beautifului.dev (MIT, © 2026 Shane Levine)
// Kept close to upstream, so its effect-cleanup and ternary style is allowed here.
/* eslint-disable consistent-return, no-nested-ternary, @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from 'react';

/* ─────────────────────────────────────────────────────────
 * STREAMING TEXT
 * Words resolve in, inline citations appear in context,
 * then actions and follow-up prompts become usable.
 * Plays once; the retry action replays it.
 * ───────────────────────────────────────────────────────── */

const WORD_MS = 45;

/* one streamed word, or a citation that renders an inline source chip */
type Token = { text: string; cite?: number };

/* "Some text [0] more text" → words plus citation tokens */
function tokenize(answer: string): Token[] {
  return answer
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      const m = word.match(/^\[(\d)\]$/);
      return m ? { text: '', cite: Number(m[1]) } : { text: word };
    });
}

export type StreamingSource = {
  name: string;
  domain: string;
  href: string;
  letter: string;
  color: string;
};

export type FollowUp = { text: string; href: string };

function sourceImage(source: StreamingSource) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='16' fill='${source.color}'/><text x='32' y='44' font-family='Inter,Arial' font-size='34' font-weight='600' fill='#fff' text-anchor='middle'>${source.letter}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function SourceChip({ source }: { source?: StreamingSource }) {
  if (!source) return null;
  return (
    <a
      href={source.href}
      target={source.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="mr-1 inline-flex h-4.5 -translate-y-px items-center gap-1 rounded-[5px]
        bg-inset px-[3px] align-middle font-mono text-[10.5px] text-ink-2 shadow-hairline
        transition-colors duration-150 hover:bg-hover hover:text-ink"
      style={{ animation: 'pop-in 250ms cubic-bezier(0.23,1,0.32,1) both' }}
    >
      <img src={sourceImage(source)} alt="" className="size-3 rounded-[3px]" />
      <span>{source.domain}</span>
    </a>
  );
}

export default function StreamingText({
  question,
  answer,
  sources,
  followUps,
  labels,
}: {
  question: string;
  /** the answer; `[n]` marks an inline citation to sources[n] */
  answer: string;
  sources: StreamingSource[];
  followUps: FollowUp[];
  labels: { sources: string; followUps: string };
}) {
  const content = tokenize(answer);
  const [count, setCount] = useState(0);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const done = count >= content.length;

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setCount((c) => c + 1), WORD_MS);
    return () => clearTimeout(t);
  }, [count, done]);

  const copyAnswer = () => {
    navigator.clipboard
      ?.writeText(answer.replace(/\s*\[\d\]/g, ''))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      });
  };

  return (
    <div className="w-full max-w-[34rem]">
      {/* user bubble */}
      <div className="mb-3 flex justify-end pl-14">
        <div className="rounded-xl bg-field px-3 py-1.5 text-[13px] leading-[1.4] text-ink">
          {question}
        </div>
      </div>

      <p className="min-h-[7.5rem] text-[13px] leading-relaxed text-ink">
        {content.slice(0, count).map((token, i) =>
          token.cite !== undefined ? (
            <SourceChip key={i} source={sources[token.cite]} />
          ) : (
            <span key={i} className="inline">
              {token.text}{' '}
            </span>
          )
        )}
        {!done && (
          <span
            className="ml-0.5 inline-block h-3 w-0.5 translate-y-0.5 rounded-full bg-ink"
            style={{ animation: 'fade-in 150ms ease-out both' }}
          />
        )}
      </p>

      {/* actions row */}
      <div
        className="mt-2 flex items-center gap-0.5 transition-opacity duration-400"
        style={{ opacity: done ? 1 : 0, pointerEvents: done ? 'auto' : 'none' }}
      >
        <button
          type="button"
          aria-label={copied ? 'Copied' : 'Copy'}
          onClick={copyAnswer}
          className="flex size-6 items-center justify-center rounded-chip text-ink-3 transition-colors duration-100 hover:bg-hover-2 hover:text-ink-2"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {copied ? (
              <path d="M20 6L9 17l-5-5" />
            ) : (
              <g>
                <rect x="9" y="9" width="12" height="12" rx="2.5" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </g>
            )}
          </svg>
        </button>
        <button
          type="button"
          aria-label="Replay"
          onClick={() => setCount(0)}
          className="flex size-6 items-center justify-center rounded-chip text-ink-3 transition-colors duration-100 hover:bg-hover-2 hover:text-ink-2"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-expanded={sourcesOpen}
          onClick={() => setSourcesOpen((current) => !current)}
          className="ml-1.5 flex items-center gap-1.5 rounded-chip px-1 py-0.5 text-left transition-colors duration-150 hover:bg-hover"
        >
          <span className="flex -space-x-1">
            {sources.map((source) => (
              <img
                key={source.domain}
                src={sourceImage(source)}
                alt=""
                className="size-3.5 rounded-full bg-surface shadow-[0_0_0_1.5px_var(--canvas)]"
              />
            ))}
          </span>
          <span className="text-[12px] text-ink-2">{labels.sources}</span>
        </button>
      </div>

      <div
        className="grid transition-[grid-template-rows,opacity] duration-300"
        style={{
          gridTemplateRows: done && sourcesOpen ? '1fr' : '0fr',
          opacity: done && sourcesOpen ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div className="overflow-hidden">
          <div className="mt-1.5 flex flex-col rounded-card bg-inset p-1 shadow-hairline">
            {sources.map((source) => (
              <a
                key={source.domain}
                href={source.href}
                target={source.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-2 rounded-chip px-1.5 py-1 text-[12px] text-ink-2 transition-colors duration-150 hover:bg-hover hover:text-ink"
              >
                <img
                  src={sourceImage(source)}
                  alt=""
                  className="size-4 rounded-[4px]"
                />
                <span>{source.name}</span>
                <span className="ml-auto font-mono text-[10.5px] text-ink-3">
                  {source.domain}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* follow-ups */}
      <div
        className="mt-2.5 transition-opacity duration-400"
        style={{ opacity: done ? 1 : 0, pointerEvents: done ? 'auto' : 'none' }}
      >
        <p className="text-[12px] font-medium text-ink-2">{labels.followUps}</p>
        <div className="mt-0.5 flex flex-col">
          {followUps.map((item, i) => (
            <a
              key={item.text}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="-mx-1.5 flex items-center gap-2 rounded-[7px] border-b border-line
                p-1.5 text-left text-[12.5px] text-ink transition-colors duration-100
                hover:bg-hover-2"
              style={
                done
                  ? {
                      animation: `fade-up 350ms cubic-bezier(0.23,1,0.32,1) ${
                        i * 90
                      }ms both`,
                    }
                  : { opacity: 0 }
              }
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ink-3)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M9 10l-5 5 5 5" />
                <path d="M20 4v7a4 4 0 0 1-4 4H4" />
              </svg>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
