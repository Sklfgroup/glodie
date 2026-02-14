"use client";

import { useCallback, useId, useState } from "react";

type CopyableTextProps = {
  value: string;
  className?: string;
  copiedText?: string;
};

async function copyToClipboard(value: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.left = "-1000px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function CopyableText({
  value,
  className,
  copiedText = "Copié !",
}: CopyableTextProps) {
  const [copied, setCopied] = useState(false);
  const statusId = useId();

  const onClick = useCallback(async () => {
    try {
      await copyToClipboard(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op: if copy fails, keep UI unchanged
    }
  }, [value]);

  return (
    <div className="min-w-0">
      <div className="relative flex min-w-0 items-center">
        <button
          type="button"
          onClick={onClick}
          title="Cliquer pour copier"
          aria-describedby={statusId}
          className={`w-full min-w-0 cursor-copy truncate pr-14 text-left hover:underline ${
            className ?? ""
          }`.trim()}
        >
          {value}
        </button>
        <span
          className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 transition-opacity ${
            copied ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!copied}
        >
          {copiedText}
        </span>
      </div>
      <span id={statusId} className="sr-only" aria-live="polite">
        {copied ? copiedText : ""}
      </span>
    </div>
  );
}
