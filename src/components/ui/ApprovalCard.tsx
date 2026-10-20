// Adapted from Beautiful UI — https://www.beautifului.dev (MIT, © 2026 Shane Levine)

import { useState } from 'react';

/* ─────────────────────────────────────────────────────────
 * APPROVAL CARD — single question variant
 * A human-in-the-loop question before the agent acts. Each
 * option carries the link it opens once the visitor sends.
 * ───────────────────────────────────────────────────────── */

export type ApprovalOption = { label: string; hint: string; href: string };

export default function ApprovalCard({
  question,
  options,
  labels,
}: {
  question: string;
  options: ApprovalOption[];
  labels: { send: string; sent: string; reset: string; step: string };
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  const send = () => {
    if (picked === null) return;
    setSent(true);
    const { href } = options[picked]!;
    if (href.startsWith('http'))
      window.open(href, '_blank', 'noopener,noreferrer');
    else window.location.href = href;
  };

  if (sent) {
    return (
      <div
        className="flex w-full max-w-80 items-center gap-3"
        style={{ animation: 'pop-in 260ms cubic-bezier(0.23,1,0.32,1) both' }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-tint py-1 pl-1 pr-2.5 text-[12.5px] font-medium text-green">
          <span className="flex size-4.5 items-center justify-center rounded-full bg-green text-white">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          {labels.sent}
        </span>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setPicked(null);
          }}
          className="text-[12px] font-medium text-ink-3 transition-colors duration-150 hover:text-ink"
        >
          {labels.reset}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[22rem]">
      <div
        className="overflow-hidden rounded-card bg-surface shadow-card"
        style={{ animation: 'fade-up 380ms cubic-bezier(0.23,1,0.32,1) both' }}
      >
        <div className="p-3.5">
          <div className="text-[14px] font-medium text-ink">{question}</div>
          <div
            role="radiogroup"
            aria-label={question}
            className="mt-2.5 flex flex-col gap-1"
          >
            {options.map((option, i) => {
              const on = picked === i;
              return (
                <button
                  key={option.label}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setPicked(i)}
                  className={`flex w-full items-start gap-2.5 rounded-control px-2 py-1.5 text-left transition-colors duration-100 ${
                    on ? 'bg-hover-2' : 'hover:bg-hover'
                  }`}
                >
                  <span
                    className={`mt-[3px] flex size-3.5 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors duration-150 ${
                      on ? 'border-accent' : 'border-line-strong'
                    }`}
                  >
                    {on && (
                      <span
                        className="size-1.5 rounded-full bg-accent"
                        style={{
                          animation:
                            'pop-in 160ms cubic-bezier(0.23,1,0.32,1) both',
                        }}
                      />
                    )}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[13px] text-ink">{option.label}</span>
                    <span className="text-[12px] text-ink-3">
                      {option.hint}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-line px-3.5 py-2.5">
          <span className="text-[12px] tabular-nums text-ink-3">
            {labels.step}
          </span>
          <button
            type="button"
            disabled={picked === null}
            onClick={send}
            className="h-7 rounded-control px-3 text-[12.5px] font-medium transition-[background-color,color,transform] duration-150 enabled:active:scale-[0.97]"
            style={{
              background: picked === null ? 'var(--line-strong)' : 'var(--ink)',
              color: picked === null ? 'var(--ink-2)' : 'var(--surface)',
            }}
          >
            {labels.send}
          </button>
        </div>
      </div>
    </div>
  );
}
