"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  needType: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  company: "",
  phone: "",
  needType: "Déménagement",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("CONTACT_SEND_FAILED");
      }

      setForm(initialState);
      setStatus("success");
      setStatusMessage("Votre demande a ete envoyee. Nous revenons vers vous sous 24h ouvrées.");
    } catch {
      setStatus("error");
      setStatusMessage("Échec d'envoi. Vérifiez la configuration SMTP puis réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="grid gap-6 md:grid-cols-2" onSubmit={onSubmit}>
      <label className="text-sm font-semibold text-slate-600">
        Nom complet
        <input
          required
          type="text"
          placeholder="Jean Dupont"
          value={form.fullName}
          onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/25"
        />
      </label>
      <label className="text-sm font-semibold text-slate-600">
        Entreprise
        <input
          type="text"
          placeholder="Votre société"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/25"
        />
      </label>
      <label className="text-sm font-semibold text-slate-600">
        Téléphone
        <input
          required
          type="tel"
          placeholder="(+33 7 53 47 38 41)"
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/25"
        />
      </label>
      <label className="text-sm font-semibold text-slate-600">
        Type de besoin
        <select
          value={form.needType}
          onChange={(event) => setForm((prev) => ({ ...prev, needType: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/25"
        >
          <option>Déménagement</option>
          <option>Tournée régulière</option>
          <option>Transport B2B</option>
          <option>Prestation ponctuelle</option>
          <option>Autre</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-slate-600 md:col-span-2">
        Details de votre besoin
        <textarea
          required
          rows={4}
          placeholder="Décrivez brièvement votre projet (volume, distance, dates souhaitées...)"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/25"
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-4 font-bold text-white shadow-xl shadow-[var(--color-primary)]/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
        <p className="mt-4 text-center text-xs font-medium text-slate-400">
          Réponse sous 24h ouvrées garantie.
        </p>
        {status !== "idle" && (
          <p
            className={`mt-3 rounded-lg px-4 py-3 text-sm ${
              status === "success"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
