import { useEffect, useState } from "react";
import Button from "./Button";

const KEY = "rastermais-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function decide(value) {
    localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-[640px] flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-overlay)] p-5 backdrop-blur sm:flex-row sm:items-center"
    >
      <p className="flex-1 text-[var(--text-sm)] text-[var(--text-secondary)]">
        Usamos cookies essenciais e, com sua permissão, cookies de análise para melhorar o site. Você pode recusar.
      </p>
      <div className="flex gap-2">
        <Button variant="ghost" className="px-4 py-2 text-[var(--text-sm)]" onClick={() => decide("rejected")}>
          Recusar
        </Button>
        <Button className="px-4 py-2 text-[var(--text-sm)]" onClick={() => decide("accepted")}>
          Aceitar
        </Button>
      </div>
    </div>
  );
}
