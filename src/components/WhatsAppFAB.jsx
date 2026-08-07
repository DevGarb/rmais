export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a RasterMais no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-channel-500)] text-white shadow-lg transition-transform duration-[var(--duration-fast)] hover:scale-105 active:scale-95"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.1.2-.15.32-.29.49-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.33 1.46.29.14.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.38-.24.64-.14.27.1 1.7.8 1.99.95.29.14.48.21.55.33.07.12.07.68-.17 1.36z" />
      </svg>
    </a>
  );
}
