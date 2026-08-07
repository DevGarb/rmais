import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-raised)]"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="font-[var(--font-display)] font-semibold text-[var(--text-primary)]">{item.q}</span>
              <span
                className={`shrink-0 text-[var(--text-signal)] transition-transform duration-[var(--duration-base)] ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-[var(--duration-base)] ease-[var(--ease-standard)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[var(--text-sm)] text-[var(--text-secondary)]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
