export default function SectionDivider({ position = "top" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${position === "top" ? "top-0" : "bottom-0"} h-px`}
      style={{
        background:
          "linear-gradient(90deg, transparent 8%, var(--color-signal-a40) 30%, var(--color-signal-500) 50%, var(--color-signal-a40) 70%, transparent 92%)",
        boxShadow: "0 0 8px var(--color-signal-a40)",
      }}
      aria-hidden="true"
    />
  );
}
