"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    void error;
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] p-6">
      <section className="w-full max-w-md rounded-[28px] border border-[var(--border)] bg-white p-7 text-center shadow-[0_18px_50px_rgba(16,38,56,.08)]">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-lg font-bold text-[var(--accent)]">
          !
        </div>
        <h1 className="mt-5 text-xl font-bold text-[var(--primary)]">حدث خطأ غير متوقع</h1>
        <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
          تعذر تحميل هذه الصفحة. جرّب المحاولة مرة أخرى، وإذا استمر الخطأ سنحتاج إلى مراجعة سجل النظام.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          إعادة المحاولة
        </button>
      </section>
    </main>
  );
}
