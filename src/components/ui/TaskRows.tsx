// Adapted from Beautiful UI — https://www.beautifului.dev (MIT, © 2026 Shane Levine)
// Kept close to upstream, so its effect-cleanup and ternary style is allowed here.
/* eslint-disable consistent-return, no-nested-ternary, @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from 'react';

/* ─────────────────────────────────────────────────────────
 * TASK ROWS — "List" variant
 *
 *     0ms   rows enter staggered (80ms apart)
 *   900ms   first running row expands — detail steps drop down
 *  3300ms   it collapses again
 * Every row stays clickable afterwards.
 * ───────────────────────────────────────────────────────── */

const TICKS = [900, 2400, 0];

function useTick(intervals: number[]) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (tick >= intervals.length - 1) return;
    const t = setTimeout(() => setTick((x) => x + 1), intervals[tick]);
    return () => clearTimeout(t);
  }, [tick, intervals]);
  return tick;
}

function SpinnerRing() {
  const size = 22;
  const stroke = 2;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
        style={{ animation: 'spin 1.1s linear infinite' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--line)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--ink-3)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${c * 0.28} ${c * 0.72}`}
        />
      </svg>
    </span>
  );
}

const CheckIcon = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export type TaskDetail = { label: string; meta: string };

export type TaskRow = {
  key: string;
  label: string;
  sub?: string;
  amount: string;
  /** running → spinner, otherwise a green check */
  running?: boolean;
  details: TaskDetail[];
};

export default function TaskRows({
  rows,
  runningLabel,
  className,
}: {
  rows: TaskRow[];
  /** pill shown on running rows */
  runningLabel: string;
  className?: string;
}) {
  const tick = useTick(TICKS);
  const [manualOpen, setManualOpen] = useState<Record<string, boolean>>({});
  const autoKey = rows.find((row) => row.running)?.key;

  return (
    <div
      className={`flex w-full flex-col self-start overflow-hidden rounded-card bg-surface shadow-card${
        className ? ` ${className}` : ''
      }`}
    >
      {rows.map((row, i) => {
        const open = manualOpen[row.key] ?? (row.key === autoKey && tick === 1);
        return (
          <div
            key={row.key}
            className="self-stretch overflow-hidden border-b border-line transition-colors duration-300 last:border-0 hover:bg-inset"
            style={{
              animation: `fade-up 450ms cubic-bezier(0.23,1,0.32,1) ${
                i * 80
              }ms both`,
            }}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() =>
                setManualOpen((current) => ({ ...current, [row.key]: !open }))
              }
              className="flex min-h-11 w-full items-center gap-2.5 px-2.5 py-2 text-left"
            >
              <span className="flex size-6 shrink-0 items-center justify-center">
                {row.running ? (
                  <SpinnerRing />
                ) : (
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                    {CheckIcon}
                  </span>
                )}
              </span>
              <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                <span className="truncate text-[13px] font-medium text-ink">
                  {row.label}
                </span>
                {row.sub && (
                  <span className="truncate text-[12.5px] text-ink-2">
                    {row.sub}
                  </span>
                )}
              </span>
              <span className="hidden shrink-0 text-[12px] tabular-nums text-ink-2 sm:inline">
                {row.amount}
              </span>
              {row.running && (
                <span className="inline-flex h-5.5 shrink-0 items-center rounded-full bg-accent-tint px-2 text-[11.5px] font-medium text-accent-ink">
                  {runningLabel}
                </span>
              )}
              <span
                aria-hidden="true"
                className="-ml-1 flex size-7 shrink-0 items-center justify-center rounded-full text-ink-3"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300"
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {/* dropdown detail — same expandable grammar as Chain of Thought */}
            <div
              className="grid transition-[grid-template-rows,opacity] duration-300"
              style={{
                gridTemplateRows: open ? '1fr' : '0fr',
                opacity: open ? 1 : 0,
                transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <div className="overflow-hidden">
                <div className="mb-2.5 grid grid-cols-[24px_1fr] gap-2.5 px-2.5">
                  <span aria-hidden className="mx-auto h-full w-px bg-line" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[12px] tabular-nums text-ink-3 sm:hidden">
                      {row.amount}
                    </span>
                    {row.details.map((d, j) => (
                      <div
                        key={d.label}
                        className="flex items-center justify-between gap-4"
                        style={
                          open
                            ? {
                                animation: `fade-up 300ms cubic-bezier(0.23,1,0.32,1) ${
                                  120 + j * 100
                                }ms both`,
                              }
                            : undefined
                        }
                      >
                        <span className="text-[12px] text-ink-2">
                          {d.label}
                        </span>
                        <span className="shrink-0 font-mono text-[11.5px] tabular-nums text-ink-3">
                          {d.meta}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
