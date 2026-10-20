// Adapted from Beautiful UI — https://www.beautifului.dev (MIT, © 2026 Shane Levine)
// Kept close to upstream, so its effect-cleanup and ternary style is allowed here.
/* eslint-disable consistent-return, no-nested-ternary, @typescript-eslint/no-unused-expressions */

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────────────────
 * THINKING — "Steps" variant
 * Step list with spinner → muted checks. The trace runs
 * once, settles, and remains expandable.
 * ───────────────────────────────────────────────────────── */

const STAGES = [800, 600, 1800, 2600, 1600];

function useSequence(steps: number[]) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (stage >= steps.length - 1) return;
    const t = setTimeout(() => setStage((s) => s + 1), steps[stage]);
    return () => clearTimeout(t);
  }, [stage, steps]);
  return stage;
}

export type ThinkingRow = { primary: string; secondary?: string };

export default function Thinking({
  rows,
  active,
  done,
}: {
  rows: ThinkingRow[];
  active: string;
  done: string;
}) {
  const stage = useSequence(STAGES);
  const [manualExpanded, setManualExpanded] = useState<boolean | null>(null);
  /* stays open once settled: on a portfolio the trace is the content */
  const autoExpanded = stage >= 1;
  const expanded = manualExpanded ?? autoExpanded;
  const working = stage < 3;
  const visible =
    stage < 2 ? 0 : stage === 2 ? Math.min(2, rows.length) : rows.length;
  const traceRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  useLayoutEffect(() => {
    if (traceRef.current) setLineHeight(traceRef.current.offsetHeight);
  }, [visible, expanded, stage]);

  return (
    <div
      className="flex w-full max-w-[30rem] flex-col"
      style={{ minHeight: 176 }}
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() =>
          setManualExpanded((current) => !(current ?? autoExpanded))
        }
        className="-mx-1.5 flex w-fit items-center gap-2 rounded-control px-1.5 py-1 transition-colors duration-100 hover:bg-hover-2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={working ? 'var(--ink-2)' : 'var(--ink-3)'}
        >
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
        </svg>
        <span role="status" className="contents">
          {working ? (
            <span
              className="whitespace-nowrap bg-clip-text text-[13px] font-medium text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--ink-3) 35%, var(--ink) 50%, var(--ink-3) 65%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer-text 1.4s linear infinite',
              }}
            >
              {active}
            </span>
          ) : (
            <span
              className="whitespace-nowrap text-[13px] font-medium text-ink-2"
              style={{ animation: 'fade-in 350ms ease-out both' }}
            >
              {done}
            </span>
          )}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--ink-3)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className="grid transition-[grid-template-rows,opacity] duration-400"
        style={{
          gridTemplateRows: expanded ? '1fr' : '0fr',
          opacity: expanded ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div className="overflow-hidden">
          <div className="relative ml-[5px] mt-1 pl-4">
            <span
              aria-hidden
              className="absolute left-[3px] w-px bg-line"
              style={{
                top: -8,
                height: lineHeight ? lineHeight - 2 : 0,
                transition: 'height 500ms cubic-bezier(0.23,1,0.32,1)',
              }}
            />
            <div ref={traceRef} className="flex flex-col gap-1 py-1">
              {rows.slice(0, visible).map((row, i) => (
                <div
                  key={row.primary}
                  className="flex min-h-7 w-full flex-wrap items-center gap-x-2 rounded-chip px-1.5 py-0.5 text-left"
                  style={{
                    animation: `fade-up 320ms cubic-bezier(0.23,1,0.32,1) ${
                      i * 120
                    }ms both`,
                  }}
                >
                  {i < visible - 1 || !working ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--ink-3)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <span
                      className="size-3 shrink-0 rounded-full border-[1.5px] border-line-strong border-t-ink-2"
                      style={{ animation: 'spin 700ms linear infinite' }}
                    />
                  )}
                  <span className="text-[12.5px] font-medium text-ink">
                    {row.primary}
                  </span>
                  {row.secondary && (
                    <span className="text-[11.5px] text-ink-3">
                      {row.secondary}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
